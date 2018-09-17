import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLogin = true;

  constructor() {
  }
  ngOnInit() {
    $('body').removeClass('login-page').addClass('skin-blue');
    $('body').addClass('sidebar-mini');
  }
}
