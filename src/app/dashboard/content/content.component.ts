import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/share.service';
import { Note } from './notes/notes.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  displayHome: boolean = false;
  displayNotes: boolean = true;
  displayTasks: boolean = false;
  displayBookmarks: boolean = false;
  note: Note = new Note();

  constructor(private shareService: ShareService) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.displayBookmarks = this.shareService.displayBookmarks;
    this.displayNotes = this.shareService.displayNotes;
    this.displayHome = this.shareService.displayHome;
    this.displayTasks = this.shareService.displayTasks;
    this.note = this.shareService.note;
  }

  unsetAll() {
    this.displayBookmarks = this.displayNotes = this.displayTasks = false;
  }
}
