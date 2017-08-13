import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { AppComponent } from './app.component';
import { ManageComponent } from './manage.component';
import { UserComponent } from './user.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { UsersService } from './users.service';

import { userReducer } from './user.reducer';

@NgModule({
    imports: [ 
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/manage',
                pathMatch: 'full'
            },
            {
                path: 'manage',
                component: ManageComponent,
                children: [
                    {
                        path: 'user/:id',
                        component: UserComponent
                    }
                ]
            },
            {
                path: '**',
                pathMatch: 'full',
                component: PageNotFoundComponent
            }
        ]),
        BrowserAnimationsModule,
        /*StoreModule.provideStore({ user: userReducer }),
        StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({ 
                visible: false, 
                position: 'right' 
            })
        }),
        StoreLogMonitorModule,*/
        MdButtonModule,
        MdInputModule
    ],
    declarations: [ AppComponent, ManageComponent, UserComponent, PageNotFoundComponent ],
    providers: [ UsersService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}