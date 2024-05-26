import { Component } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrl: './search-blog.component.css'
})
export class SearchBlogComponent {

  result:any=[]=[];
  name:any="";
  books:any=[]=[];

  constructor(private postService:PostService,
    private _snack:MatSnackBar,
    private bookService:BookService
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
