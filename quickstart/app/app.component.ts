import { Component } from '@angular/core';
import { Person } from './person'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Hello {{person.name}}</h2>
  `,
})
export class AppComponent  {
  title = 'Angular Playground';
  person: Person = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@myemail.com'
  }
}
