import { Component, OnInit, Input } from '@angular/core';
import { CommentModel, Replies } from './../interface/comment-model';
import { CommentService } from './../service/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments: CommentModel[];
  rString: string;

  constructor(private service: CommentService) { }

  ngOnInit() {
    if (localStorage.getItem("CommentArray")) {
      this.comments = this.service.getComments();
    }
  }

  // Calls service function to submit a reply
  submitReply(event, id) {
    if (event.keyCode == 13) {
      this.comments=this.service.addReply(id, this.rString);
      this.rString="";
      this.comments[id].showReply=false;
      return this.comments;
    }
  }

  // Calls service function to increment likes of a main comment
  incrementCommentLikes(cid) {
    return this.comments=this.service.incrementCommentLikes(cid);
  }

  // Calls service function to increment likes of a reply
  incrementReplyLikes(cid, rid) {
    return this.comments=this.service.incrementReplyLikes(cid, rid);
  }

}
