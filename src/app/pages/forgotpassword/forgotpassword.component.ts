import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgetPasswordService } from '../../services/forget-password.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {

  sendOtpForm!:FormGroup;

  constructor(private snack:MatSnackBar ,
    private route:Router ,
     private service:ForgetPasswordService,
   private fb:FormBuilder){}

   ngOnInit():void{
    this.sendOtpForm = this.fb.group({
      email:[null,Validators.required],
    })
  }

    formSubmit(){
      const email = this.sendOtpForm.get('email')!.value;
      localStorage.setItem('user', JSON.stringify(email));
      this.service.sendMail(email).subscribe(
        (data)=>{
          this.route.navigateByUrl('/verify-otp-page');
          this.snack.open("OTP send to Gmail","Check Gmail",{
            duration:5000
          })
        },(error)=>{
          this.snack.open("Internal Server Error !!!","Try Again"
            ,{
              duration:5000
            }
          )
        }
      )
    }

}
