import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: '<h2>Welcome to the Playground Mr. {{ name }}</h2>',
  
  // Example of template file usage
  // templateUrl: 'template.html'
})
export class AppComponent {
  name: string;

  constructor() {
    this.name = 'John Doe';
  }
}
