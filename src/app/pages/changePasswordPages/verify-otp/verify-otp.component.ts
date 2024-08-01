import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgetPasswordService } from '../../../services/forget-password.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css'
})
export class VerifyOtpComponent {

  verifyOtpForm!:FormGroup;
  dataFromDb:any;
  dataFromOtpDb:any;

  constructor(private snack:MatSnackBar,
    private route:Router ,
     private service:ForgetPasswordService,
   private fb:FormBuilder){}

   ngOnInit():void{
    this.verifyOtpForm = this.fb.group({
      otp:[null,Validators.required],
    })
      this.service.getAllData().subscribe(
        (data)=>{
          this.dataFromDb = data;
        },
        (error)=>{
          this.snack.open("Server is Busy !!!","TRY LATER",{
            duration:4000
          })
          
        }
      )
      this.service.getAllDataFromOpt().subscribe(
        (data)=>{
          this.dataFromOtpDb=data;
        },(err)=>{
          console.log(err);
        }
      )
  }  
   formSubmit(){
    for (let i = 0; i < this.dataFromDb.length; i++) {
      const item1 = this.dataFromDb[i];
      const email1=item1.email
    for (let i = 0; i < this.dataFromOtpDb.length; i++) {
      const item2 = this.dataFromOtpDb[i];
      const email2=item2.email;
      if(email1 == email2){
        this.route.navigateByUrl('/change-password')
      }
    }
   }
   
  }

}
