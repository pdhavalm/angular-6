import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule  } from './shared';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { AppRoutingModule } from './app.route';
import { UiModule } from './ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserAnimationsModule,
    BrowserModule,

    // Core&Shared Module
    CoreModule,
    SharedModule,

    // Feature
    UiModule,

    // AppRoute
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
