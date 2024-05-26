import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

const BASIC_URL = "http://localhost:8080/";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {

  bookForm: FormGroup;
  pictureFile: File | null = null;
  pdfFile: File | null = null;
  pictureFileError = false;
  pdfFileError = false;

  constructor(
    private fb: FormBuilder,
     private http: HttpClient,
     private snack:MatSnackBar) {
    this.bookForm = this.fb.group({
      description: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  onFileChange(event: any, fileType: string): void {
    const file = event.target.files[0];
    if (fileType === 'picture') {
      if (file && file.type.startsWith('image/')) {
        this.pictureFile = file;
        this.pictureFileError = false;
      } else {
        this.pictureFileError = true;
      }
    } else if (fileType === 'pdf') {
      if (file && file.type === 'application/pdf') {
        this.pdfFile = file;
        this.pdfFileError = false;
      } else {
        this.pdfFileError = true;
      }
    }
  }

  onSubmit(): void {
    if (this.bookForm.valid && this.pictureFile && this.pdfFile) {
      const formData = new FormData();
      formData.append('title', this.bookForm.get('title')?.value);
      formData.append('author', this.bookForm.get('author')?.value);
      formData.append('description', this.bookForm.get('description')?.value);
      formData.append('bookPicture', this.pictureFile);
      formData.append('pdfBook', this.pdfFile);

      this.http.post(BASIC_URL+'api/create', formData)
      // this.serv.createBook(formData)
      .subscribe(
        response => {
          this.snack.open('Book Added Successfully !!!','Ok',{
            duration:3000
          })
        },
        error => {
          this.snack.open('Something Happens wrong !!!','ERROR',{
            duration:3000
          })
          console.error('Error uploading book', error);
        }
      );
    }
  }

}
