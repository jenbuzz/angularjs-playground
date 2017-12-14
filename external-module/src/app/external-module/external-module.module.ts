import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalModuleComponent } from './external-module.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExternalModuleComponent
  ],
  exports: [
    ExternalModuleComponent
  ]
})
export class ExternalModuleModule { }
