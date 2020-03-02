import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MetafrenzyModule } from 'ngx-metafrenzy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetafrenzyModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
