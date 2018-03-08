import { Component, OnInit } from '@angular/core';
import { CommentModel } from './../interface/comment-model';
import { CommentService } from './../service/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  ngOnInit() { }

}
