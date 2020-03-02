import { Component } from '@angular/core';
import { MetafrenzyService } from 'ngx-metafrenzy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MetafrenzyService]
})
export class AppComponent {
  title = 'base9';

  constructor(private metafrenzyService: MetafrenzyService) {
    this.metafrenzyService.setTitle('Base Test');
  }
}
