import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VNavComponent } from './v-nav/v-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavComponent } from './dashboard/top-nav/top-nav.component';
import { ContentComponent } from './dashboard/content/content.component';
import { ShareService } from 'src/share.service';
import { NotesComponent } from './dashboard/content/notes/notes.component';
import { TasksComponent } from './dashboard/content/tasks/tasks.component';
import { BookmarksComponent } from './dashboard/content/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    VNavComponent,
    DashboardComponent,
    TopNavComponent,
    ContentComponent,
    NotesComponent,
    TasksComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
