import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducer';

import { TextComponent } from './text/text.component';
import { textReducer } from './text/text.reducer';
import { TextEffects } from './text/text.effects';

import { UserComponent } from './user/user.component';
import { userReducer } from './user/user.reducer';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        TextComponent,
        UserComponent,
        PageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        EffectsModule.forRoot([TextEffects]),
        StoreModule.forRoot({
            count: counterReducer,
            text: textReducer,
            user: userReducer,
            router: routerReducer,
        }),
        RouterModule.forRoot([
            {
                path: '',
                component: AppComponent,
           
            },
            {
                path: 'page',
                component: PageComponent,
            }
        ]),
        StoreDevtoolsModule.instrument(),
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
