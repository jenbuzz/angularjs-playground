import { Component } from '@angular/core';
import { FamilyService } from '../family.service';

@Component({
    selector: 'app-bastard',
    template: `
        <div>
            <p><strong>Bastard</strong></p>
            <p>Family service told bastard: {{ familyMessage }}</p>
        </div>
    `,
})
export class BastardComponent {

    hey: string = 'Hey, what about me?';

    familyMessage: string;

    constructor(private familyService: FamilyService) {
        this.familyService.getCurrentMessage().subscribe(message => {
            this.familyMessage = message;
        });
    }

}
