import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalFeatureModuleComponent } from './internal-feature-module.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InternalFeatureModuleComponent
  ],
  exports: [
    InternalFeatureModuleComponent
  ]
})
export class InternalFeatureModuleModule { }
