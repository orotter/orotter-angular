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
