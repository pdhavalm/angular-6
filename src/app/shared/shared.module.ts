import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const pipe = [];
const directive = [];


@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [...pipe, ...directive],
  exports: [
    // Import from angular default module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    ...pipe,
    ...directive
  ]
})
export class SharedModule { }
