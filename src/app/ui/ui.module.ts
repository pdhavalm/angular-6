import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared';

const routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [
    SharedModule, CommonModule, RouterModule.forChild(routes)
  ],
  exports: [SidebarComponent],
  declarations: [SidebarComponent, LoginComponent, LoginComponent]
})
export class UiModule { }
