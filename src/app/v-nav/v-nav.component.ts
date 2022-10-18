import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/share.service';
import { Note } from '../dashboard/content/notes/notes.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-v-nav',
  templateUrl: './v-nav.component.html',
  styleUrls: ['./v-nav.component.css'],
})
export class VNavComponent implements OnInit {
  constructor(private shareService: ShareService, private http: HttpClient) {}
  ngOnInit(): void {}

  notes: Array<Note> = [];

  onClickBookmarks() {
    this.shareService.changeSubBookmarks(true);
  }
  onClickTasks() {
    this.shareService.changeSubTasks(true);
  }
  onClickNotes() {
    this.shareService.changeSubNotes(true);
  }

  displayNotes: boolean = false;

  onClickExpandNotes() {
    let options = { headers: { 'Content-Type': 'application/json' } };

    this.http
      .get('http://localhost:5000/api/v1/notes', options)
      .subscribe((data: any) => {
        this.notes = data;
        console.log(data);
      });
  }
  onClickNoteTitle(event: any) {
    let targetNoteId = event.target.value;
    let options = { headers: { 'Content-Type': 'application/json' } };

    this.http
      .get('http://localhost:5000/api/v1/notes/' + targetNoteId, options)
      .subscribe((data: any) => {
        this.notes = data;
        console.log(data);
      });
  }
}
