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
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8;')
    .set('Access-Control-Allow-Origin', '*');

  addNote(object: Note) {
    console.log(JSON.stringify(object));

    this.http
      .post('http://localhost:5000/notes/', JSON.stringify(object), {
        headers: this.headers,
      })
      .subscribe((data) => {
        console.log(data);
      });
    // this is equivalent to typing manually in POSTMAN, we are client
  }
}
