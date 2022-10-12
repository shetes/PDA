import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/share.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  displayNotes: boolean = false;
  displayTasks: boolean = false;
  displayBookmarks: boolean = false;

  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.unsetAll();
    this.shareService.subNotes.subscribe(flag => {this.displayNotes = flag;
      console.log('Content Notes: ' + this.displayNotes);
    })
    this.shareService.subTasks.subscribe(flag => {this.displayTasks = flag;
      console.log('Content Tasks: ' + this.displayTasks);
    })
    this.shareService.subBookmarks.subscribe(flag => {this.displayBookmarks = flag;
      console.log('Content Bookmarks: ' + this.displayBookmarks);
    })
  }

  unsetAll() {
    this.displayBookmarks = this.displayNotes = this.displayTasks = false;
  }
}
