import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from './app/dashboard/content/notes/notes.component';

@Injectable({
  providedIn: 'root',
})
export class ShareService {

  displayHome: boolean = false;
  displayNotes: boolean = true;
  displayTasks: boolean = false;
  displayBookmarks: boolean = false;
  note: Note = new Note();


  resetAll(flag: boolean) {
    this.displayBookmarks = flag;
    this.displayHome = flag;
    this.displayNotes = flag;
    this.displayTasks = flag;
  }

  constructor() {}
}
