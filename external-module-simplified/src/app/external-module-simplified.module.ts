import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExternalModuleSimplifiedComponent } from './external-module-simplified.component';

@NgModule({
  declarations: [
    ExternalModuleSimplifiedComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [ExternalModuleSimplifiedComponent]
})
export class ExternalModuleSimplifiedModule { }
