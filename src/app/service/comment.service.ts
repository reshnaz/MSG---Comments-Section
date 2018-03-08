import { Injectable } from '@angular/core';
import { CommentModel, Replies } from './../interface/comment-model';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {

  // Array of imported interface type used to store input values.
  comments: CommentModel[] = [];
  r: Replies = { rid: null, rdata: null, likes: null, rdate: null, showReply: false };

  // Service function that adds values in the array by using push() method.
  addComment(comment: CommentModel) {
    this.comments.push(comment);
    localStorage.setItem('CommentArray', JSON.stringify(this.comments));
    return this.comments = this.getComments();
  }

  // Identifies to which comment the reply belongs using the id passed as parameter.
  addReply(id: number, rString: string) {
    let i = this.comments[id].replies.length;
    if (i == 1 && this.comments[id].replies[i - 1].rid == null) {
      this.comments[id].replies[i - 1].rid = i - 1;
      this.comments[id].replies[i - 1].rdata = rString;
      this.comments[id].replies[i - 1].rdate = new Date();
    } else {
      i++;
      this.comments = this.getComments();
      this.r.rid = i - 1;
      this.r.rdata = rString;
      this.r.rdate = new Date();
      this.comments[id].replies.push(this.r);
    }
    localStorage.setItem('CommentArray', JSON.stringify(this.comments));
    return this.comments = this.getComments();
  }

  // Increments main comment's likes
  incrementCommentLikes(cid: number) {
    this.comments = this.getComments();
    if (this.comments[cid].likes == null) {
      this.comments[cid].likes = 1;
    } else {
      this.comments[cid].likes++;
    }
    localStorage.setItem('CommentArray', JSON.stringify(this.comments));
    return this.comments = this.getComments();
  }

  // Increments a reply's likes
  incrementReplyLikes(cid: number, rid: number) {
    this.comments = this.getComments();
    if (this.comments[cid].replies[rid].likes == null) {
      this.comments[cid].replies[rid].likes = 1;
    } else {
      this.comments[cid].replies[rid].likes++;
    }
    localStorage.setItem('CommentArray', JSON.stringify(this.comments));
    return this.comments = this.getComments();
  }

  // Service function which will return (GET) the array of interface object.
  getComments(): CommentModel[] {
    this.comments = JSON.parse(localStorage.getItem('CommentArray'));
    return this.comments;
  }

}
