import { Component, OnInit } from '@angular/core';
import { CommentModel } from './../interface/comment-model';
import { CommentService } from './../service/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  commentModel: CommentModel;
  commentList: CommentModel[] = [];
  cIndex: number = 0;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.initCommentModel();
    // this.commentList = this.commentService.getComments();
    if (localStorage.getItem("CommentArray")) {
      this.commentList = this.commentService.getComments();
    }
  }

  initCommentModel() {
    /**Define default values */
    return this.commentModel = {
      id: null,
      data: '',
      likes: null,
      replies: [{ rid: null, rdata: '', likes: null, rdate: null, showReply: false }],
      showReply: false,
      cDate: null
    };
  }

  addComment(vals) {
    console.log(vals);
    // Assign input values to interface variables.
    if (this.commentList) {
      this.cIndex = this.commentList.length;
    }
    if (vals.commentBox != "") {
      const newComment: CommentModel = {
        id: this.cIndex,
        data: vals.commentBox,
        likes: null,
        replies: [{ rid: null, rdata: null, likes: null, rdate: null, showReply: false }],
        showReply: false,
        cDate: new Date()
      }
      this.commentList = this.commentService.addComment(newComment);
      this.commentModel.data = "";
    }
  }

}
