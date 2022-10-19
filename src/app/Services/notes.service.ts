import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../dashboard/content/notes/notes.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

  options = { headers: { 'Content-Type': 'application/json' } };

  addNote(object: Note) {
    const note: string = JSON.stringify(object);
    console.log(note);

    this.http
      .post('http://localhost:5000/api/v1/notes', note, this.options)
      .subscribe((data) => {
        console.log(data);
      });
    // this is equivalent to typing manually in POSTMAN, we are client
  }
  getAllNotes() {
    let notes: Array<Note> = [];
    this.http
      .get('http://localhost:5000/api/vi/notes', this.options)
      // .post('http://20.12.31.246:5000/api/v1/notes', note, options)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
