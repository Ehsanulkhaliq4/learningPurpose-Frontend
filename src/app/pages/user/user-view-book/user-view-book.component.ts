import { Component } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookPopupComponent } from '../../book-popup/book-popup.component';

@Component({
  selector: 'app-user-view-book',
  templateUrl: './user-view-book.component.html',
  styleUrl: './user-view-book.component.css'
})
export class UserViewBookComponent {

  books:any=[];
  bookId:any;

  constructor(private bookService:BookService,
    public dialog: MatDialog,
    public _snack:MatSnackBar
  ){}

  ngOnInit(){
    this.getAllBook();
  }

 openpopup(bookId:number){
  this.dialog.open(BookPopupComponent,{
    data : {id : bookId }
  })
 }


  getAllBook(){
    this.bookService.getAllFiles().subscribe((response:any[])=>{
      response.forEach(element=>{
        element.processedImage = "data:image/jpeg;base64,"+ element.bookPicture;
        this.books.push(element);
      })
    })
  }

  downloadFile(fileId:number):void{
    this.bookService.downloadFile(fileId).subscribe(response=>{
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
