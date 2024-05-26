import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from '../../services/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-popup',
  templateUrl: './book-popup.component.html',
  styleUrl: './book-popup.component.css'
})
export class BookPopupComponent {

  existingImage:string | null = null;
  bookData:any;
  bookId:number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:BookService,
    private snack:MatSnackBar
  ){
    this.bookId=data.id;
  }
  
  ngOnInit(){
    this.extractBook();
  }

  extractBook(){
      this.service.getPostById(this.bookId).subscribe(
        (res)=>{
          this.existingImage = 'data:image/jpeg;base64,'+res.bookPicture;
          this.bookData= res;
        },
        (err)=>{
          this.snack.open("Something went wrong !!!","Ok");
        }
      )
  }

  downloadFile(fileId:number):void{
    this.service.downloadFile(fileId).subscribe(response=>{
      const fileNameFromUrl ="LearningPurposeStoreBook";
      if(fileNameFromUrl){
        const contentType = response.headers.get("Content-Type")
        const blob = new Blob([response.body],{ type:contentType});
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = fileNameFromUrl;
        link.click();
        window.URL.revokeObjectURL(link.href);
        link.remove();
      }else{
        console.log("Unable to extract file");
      }
    })
  }

}
