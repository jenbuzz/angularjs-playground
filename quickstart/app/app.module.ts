import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './welcome.component';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  declarations: [ AppComponent, AboutComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
