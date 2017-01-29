import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      }
    ])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
