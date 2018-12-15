import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-baby',
    template: `
        <div>
            <p><strong>Baby</strong></p>
            <p>Big Daddy told Baby to: {{ message }}</p>
        </div>
    `,
})
export class BabyComponent implements OnInit {

    @Input()
    message: string;

    @Output()
    replyEvent = new EventEmitter<string>();

    reply: string = 'OK!';

    constructor() {}

    ngOnInit() {
        this.replyEvent.emit(this.reply);
    }

}
