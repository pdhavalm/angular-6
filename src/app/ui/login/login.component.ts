import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/service';
import { LoadingIndicatorService } from '../../core/interceptor';
import { Login } from '../../shared/model';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public LoginForm: FormGroup;
  isLoginSubmitted = false;
  isLoading = false;
  constructor(public router: Router,
    public adminService: AuthenticationService,
    public toastr: ToastrService,
    public loadingIndicatorService: LoadingIndicatorService) {
    this.BindForm();
  }

  ngOnInit() {
    $('body').removeClass('sidebar-mini').removeClass('skin-blue').addClass('login-page');
  }

  BindForm() {
    this.LoginForm = new FormGroup({
      'Username': new FormControl('', [Validators.required]),
      'Password': new FormControl('', [Validators.required])
    });
  }

  Login(obj: Login, isValid: boolean) {
    this.isLoading = true;
    this.isLoginSubmitted = true;
    if (isValid) {
      this.adminService.Login(obj).subscribe((data: any) => {
        if (data.token !== '') {
          localStorage.setItem('currentUser', JSON.stringify(data.token));
          this.adminService.CheckUserLoggedIn();
          console.log('/home/dashboard');
          window.location.href = '/home/dashboard';
        } else {
          this.toastr.error(data.msg);
        }
        this.isLoading = false;
      });
    }
  }
}
