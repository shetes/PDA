import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/Services/share.service';
import { Note } from './notes/notes.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  displayHome: boolean = false;
  displayNotes: boolean = false;
  displayTasks: boolean = false;
  displayReadingList: boolean = false;
  note: Note = new Note();

  constructor(private shareService: ShareService) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.displayNotes = this.shareService.displayNotes;
    this.displayHome = this.shareService.displayHome;
    this.displayTasks = this.shareService.displayTasks;
    this.displayReadingList = this.shareService.displayReadingList;
    this.note = this.shareService.note;
  }
}
