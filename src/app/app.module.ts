import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VNavComponent } from './v-nav/v-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavComponent } from './dashboard/top-nav/top-nav.component';
import { ContentComponent } from './dashboard/content/content.component';
import { ShareService } from 'src/Services/share.service';
import { NotesService } from './dashboard/content/notes/notes.service';
import { NotesComponent } from './dashboard/content/notes/notes.component';
import { TasksComponent } from './dashboard/content/tasks/tasks.component';
import { HomeComponent } from './dashboard/content/home/home.component';
import { ReadingListComponent } from './dashboard/content/reading-list/reading-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VNavComponent,
    DashboardComponent,
    TopNavComponent,
    ContentComponent,
    NotesComponent,
    TasksComponent,
    HomeComponent,
    ReadingListComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ShareService, NotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
