import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Sample } from '@app/models';

@Injectable()
export class OrotterService {
  constructor(
    private http: Http
  ) {}

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
