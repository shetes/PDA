import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../app/dashboard/content/notes/notes.component';

@Injectable({
  providedIn: 'root',
})
export class ShareService {

  displayHome: boolean = false;
  displayNotes: boolean = true;
  displayTasks: boolean = false;
  displayReadingList: boolean = false;
  note: Note = new Note();

  setDisplayHome() {
    this.resetAll(false);
    this.displayHome = true;
  }

  setDisplayNotes() {
    this.resetAll(false);
    this.displayNotes = true;
  }

  setDisplayTasks() {
    this.resetAll(false);
    this.displayTasks = true;
  }

  setDisplayReadingList() {
    this.resetAll(false);
    this.displayReadingList = true;
  }

  resetAll(flag: boolean) {
    this.displayReadingList = flag;
    this.displayHome = flag;
    this.displayNotes = flag;
    this.displayTasks = flag;
  }

  constructor() {}
}
