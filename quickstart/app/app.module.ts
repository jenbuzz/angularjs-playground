import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  declarations: [ AppComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
