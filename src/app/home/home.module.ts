import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { HomeRouteModule } from './home.route';
import { DashboardComponent } from './dashboard/dashboard.component';

const component = [DashboardComponent];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HomeRouteModule
  ],
  declarations: [...component]
})
export class HomeModule { }
