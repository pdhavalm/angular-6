import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/service';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingIndicatorService } from './core/interceptor';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public isLogin = true;
  public showLoader = false;
  
  constructor(public url: LocationStrategy, public router: Router, public adminService: AuthenticationService,
    public loadingIndicatorService: LoadingIndicatorService) {

    this.adminService.isLogin.subscribe(isLogins => { this.isLogin = isLogins; });
    this.loadingIndicatorService.onLoadingChanged.subscribe(isLoading => {
      setTimeout(() => this.showLoader = isLoading, 0);
    });
  }

  ngOnInit() {
    $('body').removeClass('login-page').addClass('skin-blue');
    $('body').addClass('sidebar-mini');
    this.adminService.CheckUserLoggedIn();
    const currentUrl = this.url.path().substring(1);
    const str = ['account', '/login'];
    if ((currentUrl === '' && this.isLogin) || (this.isLogin && str.includes(currentUrl))) {
      this.router.navigate(['/home/dashboard']);
    }
  }

  Logout() {
    this.adminService.Logout();
    this.router.navigate(['/login']);
  }
}
