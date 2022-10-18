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
  headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=utf-8;'
  );
  // .set('Access-Control-Allow-Origin', 'http://localhost:5000/notes');

  addNote(object: Note) {
    const note: string = JSON.stringify(object);
    console.log(note);
    const options = { headers: { 'Content-Type': 'application/json' } };

    this.http
      .post('http://localhost:5000/notes', note, options)
      // .post('http://20.12.31.246:5000/api/v1/notes', note, options)
      .subscribe((data) => {
        console.log(data);
      });
    // this is equivalent to typing manually in POSTMAN, we are client
  }
}
