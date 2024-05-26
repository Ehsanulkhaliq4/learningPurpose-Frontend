import { Component } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { BookPopupComponent } from '../../book-popup/book-popup.component';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrl: './view-books.component.css'
})
export class ViewBooksComponent {

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

  deleteBook(bookId){
    Swal.fire({
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure , You want to delete this Book?'
    }).then((result)=>{
      if(result.isConfirmed){
        this.bookService.deleteBook(bookId).subscribe((data)=>{
          this._snack.open('Book Deleted !!!','',{
            duration:3000
          });
          this.books = this.books.filter((q)=>q.quesId != bookId)
          
        },
        (error)=>{
          this._snack.open('Error in deleting Book !!!','ERROR',{
            duration:3000
          })
        });
      }
    },)
  }

}
