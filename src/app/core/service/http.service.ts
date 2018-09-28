import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class HttpService {
  getAuthHttpCommon() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser && currentUser.AccessToken;
    return {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer' + token)
        .set('content-type', 'application/json')
    };
  }

  getOnlyAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currenytUser'));
    const token = currentUser && currentUser.AccessToken;
    return { headers: new HttpHeaders().set('Authorization', 'Bearer' + token) };
  }

  getJsonHttpCommon() {
    return { headers: new HttpHeaders().set('content-type', 'application/json') };
  }

  getHttpCommon() {
    return { headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded') };
  }
}
