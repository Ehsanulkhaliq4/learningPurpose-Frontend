import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  addBook(formData:any){
    return this.http.post(BASIC_URL + 'api/create', formData);
  }

  getAllFiles():Observable<any>{
    return this.http.get(BASIC_URL + "api/books")
  }

  downloadFile(fileId:number): Observable<HttpResponse<Blob>>{
    return this.http.get(BASIC_URL + `api/download/${fileId}`,{
      responseType:'blob',
      observe:'response'
    });
  }

  getPostById(bookId:number):Observable<any>{
    return this.http.get(BASIC_URL + `api/bookById/${bookId}`);
  }

  deleteBook(bookId:number){
    return this.http.delete(BASIC_URL +`api/deleteBook/${bookId}`)
  }
}
