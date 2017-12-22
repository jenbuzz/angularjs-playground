import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalModuleSimplifiedComponent } from './external-module-simplified.component';

export * from './external-module-simplified.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExternalModuleSimplifiedComponent
  ],
  exports: [
    ExternalModuleSimplifiedComponent
  ]
})
export class ExternalModuleSimplifiedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExternalModuleSimplifiedModule
    };
  }
}
