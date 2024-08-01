import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  BASEURL='http://localhost:8080/'

  constructor(private client:HttpClient) { }

  public sendMail(email:string){
    return this.client.post(this.BASEURL+"api/get-otp",email)
  }
  public getAllData(){
    return this.client.get(this.BASEURL+"user/getAllUser");
   }
  public getAllDataFromOpt(){
    return this.client.get(this.BASEURL+"api/");
  }
  public getUserByEmail(email:any){
    return this.client.get(this.BASEURL+"user/getUserByEmail"+email)
  }
  public deleteOtpTable(){
    return this.client.delete(this.BASEURL+"")
  }
  public savePassword(request: { email: string, password: string }): Observable<any> {
    return this.client.post('/api/change-password', request);
}

}
