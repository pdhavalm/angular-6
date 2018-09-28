import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Login } from '../../shared/model';
import { post } from 'selenium-webdriver/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @Output() isLogin: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient, public httpService: HttpService) { }

  Login(obj: Login) {
    return this.http.post(`${environment}/token`,
      `username=${obj.Username}&password=${obj.Password}`,
      this.httpService.getHttpCommon());
  }

  CheckUserLoggedIn(): boolean {
    if (localStorage.getItem('currentUser')) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.isLogin.emit(true);
      return true;
    }
    this.isLogin.emit(false);
    return false;
  }

  Logout() {
    localStorage.removeItem('currentUser');
    this.CheckUserLoggedIn();
  }
}
