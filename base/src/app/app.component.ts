import { Component } from '@angular/core';

import { MetafrenzyService } from 'ngx-metafrenzy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MetafrenzyService]
})
export class AppComponent {
  title = 'the base app';

  constructor(private metafrenzyService: MetafrenzyService) {
    this.metafrenzyService.setTitle('Base Test');
  }
}
