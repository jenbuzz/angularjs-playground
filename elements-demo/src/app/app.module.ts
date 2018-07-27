import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CustomElementComponent } from './custom-element/custom-element.component';

@NgModule({
    declarations: [
        CustomElementComponent,
    ],
    imports: [
        BrowserModule,
    ],
    entryComponents: [
        CustomElementComponent,
    ]
})
export class AppModule {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        const customElement = createCustomElement(CustomElementComponent, {
            injector: this.injector,
        });
        customElements.define('custom-element', customElement);
    }
}
