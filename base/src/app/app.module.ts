import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InternalFeatureModuleModule } from './internal-feature-module/internal-feature-module.module'; 
import { AppComponent } from './app.component';

import { ExternalModuleModule } from 'external-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InternalFeatureModuleModule,
    ExternalModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
