import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  note?: Note;
  // ?: nullish operator, allows shit to be null
  constructor() {}
  ngOnInit(): void {
    this.note = new Note();
    this.note.Title = '';
  }

  title = '';

  addNewNote() {}
}
export class Note {
  private _title: string = '';
  private _content: string = '';

  public get Title() {
    return this._title;
  }
  public set Title(value: string) {
    this._title = value;
  }

  public get Content() {
    return this._content;
  }
  public set Content(value: string) {
    this._content = value;
  }
}
