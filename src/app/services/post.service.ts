import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient) { }

  creatPost(postData:any):Observable<any>{
    return this._http.post(BASIC_URL + "api/post",postData)
  }
  getAllPosts():Observable<any>{
    return this._http.get(BASIC_URL + "api/post");
  }
  getPostById(postId:number):Observable<any>{
    return this._http.get(BASIC_URL + `api/post/${postId}`);
  }
  searchByName(name:string):Observable<any>{
    return this._http.get(BASIC_URL + `api/post/search/${name}`)
  }

}
