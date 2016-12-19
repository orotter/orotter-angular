import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Sample } from '@app/models';

@Injectable()
export class OrotterService {
  constructor(
    private http: Http
  ) {
    // let _build = http['_backend']['_browserXHR']['build'];
    // http['_backend']['_browserXHR']['build'] = () => {
    //   let _xhr = _build(); _xhr.withCredentials = true; 
    //   return _xhr;
    // };
  }

  login(username: string, password: string) {
    return this.http.post('/api/v1/u/login', {
      'username': username,
      'password': password
    });
  }

  logout() {
    return this.http.get('/api/v1/u/logout');
  }
}
