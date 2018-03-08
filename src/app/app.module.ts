import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { commentRouting } from './routes/comment-routes.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentService } from './service/comment.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AddCommentComponent,
    CommentComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, commentRouting, HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
