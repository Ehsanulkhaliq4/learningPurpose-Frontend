import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css'
})
export class ViewPostComponent {

  postId = this.activatedRouter.snapshot.params['id'];
  postData:any;
  comments:any;
  existingImage:string | null = null;

  commentForm!: FormGroup;

  constructor(private postService:PostService,
    private activatedRouter:ActivatedRoute,
    private snackBar:MatSnackBar,
    private fb:FormBuilder,
    private commentService:CommentService
  ){}

  ngOnInit(){
    this.getPostById()
    this.commentForm = this.fb.group({
      postedBy: [null,Validators.required],
      content:[null,Validators.required]
    })
  }
  getPostById(){
    this.postService.getPostById(this.postId).subscribe(
      (res)=>{
        this.existingImage = 'data:image/jpeg;base64,'+res.dto.byteImg;
        this.postData= res;
        this.getCommentsByPost();
      },
      (err)=>{
        this.snackBar.open("Something went wrong !!!","Ok");
      }
    )
  }

  publishComment(){
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;
    this.commentService.createComment(this.postId,postedBy,content).subscribe(
      (res)=>{
        this.snackBar.open("Comment Publish Successfully","OK");
        this.getCommentsByPost();
      },(err)=>{
        this.snackBar.open("Something went wrong !!!","Ok")
      }
    )
  }

  getCommentsByPost(){
    this.commentService.getAllCommentsByPost(this.postId).subscribe(
      (res)=>{
        this.comments = res;
      },(err)=>{
        this.snackBar.open("Something went wrong !!!")
      }
    )
  }
}
