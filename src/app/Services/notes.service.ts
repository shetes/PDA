import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../dashboard/content/notes/notes.component';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {}
  private notes: Note[] = [];
  addNote(object: Note) {
    this.notes.push(object);
    console.log(this.notes);
  }
}
