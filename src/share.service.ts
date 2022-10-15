import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  subNotes = new BehaviorSubject<boolean>(false);
  subTasks = new BehaviorSubject<boolean>(false);
  subBookmarks = new BehaviorSubject<boolean>(false);

  changeSubNotes(val: boolean) {
    this.resetAll(false);
    this.subNotes.next(val);
  }

  changeSubTasks(val: boolean) {
    this.resetAll(false);
    this.subTasks.next(val);
  }

  changeSubBookmarks(val: boolean) {
    this.resetAll(false);
    this.subBookmarks.next(val);
  }

  resetAll(flag: boolean) {
    this.subBookmarks.next(flag);
    this.subTasks.next(flag);
    this.subNotes.next(flag);
  }

  constructor() {}
}
