import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { NotesService } from './notes.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Hello {{person.name}}</h2>
    <ul>
      <li *ngFor="let note of notes">{{note}}</li>
    </ul>
  `,
  providers: [NotesService]
})
export class AppComponent implements OnInit {
  title = 'Angular Playground';
  person: Person = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@myemail.com'
  };
  notes: string[];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
  }
}
