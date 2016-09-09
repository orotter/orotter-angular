import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Sample } from '@app/shared/models';

const ARTICLES_URL = 'api/v1/a';
const ARTICLE_URL = 'api/v1/a/';

@Injectable()
export class SampleService {
  constructor(
    private http: Http
  ) {
    let _build = http['_backend']['_browserXHR']['build'];
    http['_backend']['_browserXHR']['build'] = () => {
      let _xhr = _build(); _xhr.withCredentials = true; 
      return _xhr;
    };
  }

  login(username: string, password: string): Promise<any> {
    // var url = `http://128.199.191.99/api/v1/u/login?username=${username}&password=${password}`;
    return new Promise<any>((resolve, reject) => {
      // this.http.get(url)
      //   .subscribe(response => {
      //     var data = response.json();
      //     var user = data.user;
      //     console.log(user);
      //     resolve(user);
      //   });
      resolve({
        name: 'Test'
      });
    });
  }
  
  getSampleList(): Promise<Sample[]> {
    return new Promise<Sample[]>((resolve, reject) => {
      resolve([
        { 'id': 1, 'name': 'A' },
        { 'id': 2, 'name': 'B' },
        { 'id': 3, 'name': 'C' },
        { 'id': 4, 'name': 'D' },
        { 'id': 5, 'name': 'E' }
      ]);
    });
  }

  getSampleById(id: number): Promise<Sample> {
    return new Promise<Sample>((resolve, reject) => {
      this.getSampleList().then(items => {
        resolve(items.filter(s => s.id == id)[0]);
      });
    });
  }
}
