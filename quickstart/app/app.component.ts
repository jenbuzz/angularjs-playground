import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { NotesService } from './notes.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
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
    this.notesService.getNotes().then(notes => this.notes = notes);
  }
}
