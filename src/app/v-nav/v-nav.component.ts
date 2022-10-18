import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/share.service';

@Component({
  selector: 'app-v-nav',
  templateUrl: './v-nav.component.html',
  styleUrls: ['./v-nav.component.css'],
})
export class VNavComponent implements OnInit {
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
  constructor(private shareService: ShareService) {}

  ngOnInit(): void {}

  onClickExpandNotes() {}
}
