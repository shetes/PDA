import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  note: Note = new Note();
  // ?: nullish operator, allows shit to be null
  constructor(private service: NotesService) {}
  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.note.content != '') {
      this.service.addNote(this.note);
    }
  }
}
export class Note {
  title: string = '';
  content: string = '';

  // public get title() {
  //   return this._title;
  // }
  // public set title(value: string) {
  //   this._title = value;
  // }

  // public get content() {
  //   return this._content;
  // }
  // public set content(value: string) {
  //   this._content = value;
  // }
}
