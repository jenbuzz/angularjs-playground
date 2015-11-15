import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  template: '<h2>Welcome to the Playground Mr. {{ name }}<h2/>'
})
export class App {
  constructor() {
    this.name = 'John Doe';
  }
}
