import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards';
import { LoadingIndicatorService, ErrorInterceptor, LoaderHttpInterceptor } from './interceptor';
import { AuthenticationService, HttpService } from './service';

const service = [ AuthenticationService, HttpService ];

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [],
  declarations: [],
  providers: [
    AuthGuard,
    ...service,
    LoadingIndicatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: httpFactory,
      multi: true,
      deps: [LoadingIndicatorService]
    }
  ]
})
export class CoreModule { }

export function httpFactory(LoaderService) {
  return new LoaderHttpInterceptor(LoaderService);
}
