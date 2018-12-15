import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { BastardComponent } from '../bastard/bastard.component';
import { FamilyService } from '../family.service';

@Component({
    selector: 'app-big-daddy',
    template: `
        <div>
            <app-baby [message]="message" (replyEvent)="getReply($event)"></app-baby>
            <p><strong>Big Daddy</strong></p>
            <p>Baby replied to Big Daddy with: {{ reply }}</p>
            <p>Bastard asked Big Daddy: {{ hey }}</p>
            <app-bastard></app-bastard>
        </div>
    `,
})
export class BigDaddyComponent implements OnInit {

    message: string = 'Sit Down!';
    reply: string = '';

    @ViewChild(BastardComponent)
    bastard;

    hey: string;

    help: string

    constructor(private familyService: FamilyService) {}

    ngOnInit () {
        this.hey = this.bastard.hey;

        this.help = 'You sit down too!';
        this.familyService.changeMessage(this.help);
    }

    getReply($event: string) {
        this.reply = $event;
    }

}
