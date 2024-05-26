import { Component } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-serch-blog',
  templateUrl: './serch-blog.component.html',
  styleUrl: './serch-blog.component.css'
})
export class SerchBlogComponent {

  result:any=[]=[];
  name:any="";

  constructor(private postService:PostService,
    private _snack:MatSnackBar
  ){}

  searchByName(){
    this.result = [];
    this.postService.searchByName(this.name).subscribe(
      (res)=>{
        
        res.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,'+element.dto.byteImg;
          this.result.push(element)})
        
      },(err)=>{
        this._snack.open("Please Enter Some Keyword","Ok")
      }
    )
  }

}
