import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducer';

import { TextComponent } from './text/text.component';
import { textReducer } from './text/text.reducer';
import { TextEffects } from './text/text.effects';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        TextComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        EffectsModule.forRoot([TextEffects]),
        StoreModule.forRoot({
            count: counterReducer,
            text: textReducer,
        }),
        StoreDevtoolsModule.instrument(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
