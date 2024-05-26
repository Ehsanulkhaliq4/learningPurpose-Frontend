import { Component } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-all-blog',
  templateUrl: './view-all-blog.component.html',
  styleUrl: './view-all-blog.component.css'
})
export class ViewAllBlogComponent {

  allPost:any[]=[];
  

  constructor(private _postService:PostService,
    private _snack:MatSnackBar
  ){}

  ngOnInit(){
    this.getAllPost();
  }

  getAllPost(){
    this.allPost = [];
    this._postService.getAllPosts().subscribe(
    (res)=>{
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,'+element.dto.byteImg;
        this.allPost.push(element);
      })
      
    },(err)=>{
      this._snack.open("INTERNAL SERVER ERROR","TRY AGAIN",{
        duration:5000
      })
    })
  }
}
