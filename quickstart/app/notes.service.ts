import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {
  getNotes(): Promise<string[]> {
    return Promise.resolve([
      'This is note 1',
      'Another note... this is the 2nd',
      'A third note!'
    ]);
  }
}