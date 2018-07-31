import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'custom-element',
    templateUrl: './custom-element.component.html',
    // encapsulation: ViewEncapsulation.Native,
})
export class CustomElementComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        console.log('console greetings from a custom element...');
    }

}
