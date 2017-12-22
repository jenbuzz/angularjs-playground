/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ExternalModuleSimplifiedModule }  from 'external-module-simplified';

@Component({
  selector: 'app',
  template: `<external-module-simplified></external-module-simplified>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, ExternalModuleSimplifiedModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
