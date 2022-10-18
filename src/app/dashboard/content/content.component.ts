import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/share.service';
import { Note } from './notes/notes.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  displayNotes: boolean = false;
  displayTasks: boolean = false;
  displayBookmarks: boolean = false;
  note: Note = new Note();

  constructor(private shareService: ShareService) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.unsetAll();
    this.shareService.subNotes.subscribe((flag) => {
      this.displayNotes = flag;
    });
    this.shareService.subTasks.subscribe((flag) => {
      this.displayTasks = flag;
    });
    this.shareService.subBookmarks.subscribe((flag) => {
      this.displayBookmarks = flag;
    });
  }

  unsetAll() {
    this.displayBookmarks = this.displayNotes = this.displayTasks = false;
  }
}
