import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InternalFeatureModuleModule } from './internal-feature-module/internal-feature-module.module'; 
import { AppComponent } from './app.component';

import { ExternalModuleModule } from 'external-module';
import { ExternalModuleSimplifiedModule } from 'external-module-simplified';

import { MetafrenzyModule } from 'ngx-metafrenzy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InternalFeatureModuleModule,
    ExternalModuleModule,
    ExternalModuleSimplifiedModule,
    MetafrenzyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
