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
  tags: Array<any> = [
    { text: 'Programming', id: 1 },
    { text: 'Mathematics', id: 2 },
  ];
  selectedTag: number = 0;
  ngOnDestroy(): void {
    if (this.note.content != '') {
      this.note.tagId = this.selectedTag;
      console.log(this.note);
      this.service.addNote(this.note);
    }
  }
}
export class Note {
  title: string = '';
  content: string = '';
  tagId: number = 0;
}
