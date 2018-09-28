import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from './pipe';
import { NumberOnlyDirective } from './directive';
import { Common } from './common';
import { LaddaModule } from 'angular2-ladda';
import { ToastrModule } from 'ngx-toastr';

const pipe = [DateFormatPipe];
const directive = [NumberOnlyDirective];


@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // npm package
    LaddaModule.forRoot({ style: 'zoom-in' }),
    ToastrModule.forRoot({ positionClass: 'toaster-top-right' }),

  ],
  declarations: [...pipe, ...directive],
  exports: [
    // Import from angular default module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...pipe,
    ...directive,

    // npm package
    LaddaModule,
    ToastrModule
  ],
  providers: [Common]
})
export class SharedModule { }
