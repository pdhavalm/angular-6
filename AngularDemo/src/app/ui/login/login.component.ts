import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {
  }
  ngOnInit() {
    $('body').removeClass('sidebar-mini').removeClass('skin-blue').addClass('login-page');
  }
}
