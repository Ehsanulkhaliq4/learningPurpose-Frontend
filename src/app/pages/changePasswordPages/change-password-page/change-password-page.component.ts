import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgetPasswordService } from '../../../services/forget-password.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrl: './change-password-page.component.css'
})
export class ChangePasswordPageComponent {

  changePasswordForm!:FormGroup;
  user:any;
  AllUser:any;

  constructor(private snack:MatSnackBar,
    private route:Router ,
     private service:ForgetPasswordService,
   private fb:FormBuilder){}

   ngOnInit():void{
    this.changePasswordForm = this.fb.group({
      password:[null,Validators.required],
    })
    this.service.getAllData().subscribe(
      (data)=>{
        this.AllUser=data;
      }
    )
  }

  changePassword() {
    const email = JSON.parse(localStorage.getItem('user'));
    const password = this.changePasswordForm.get('password')!.value;
    const request = { email: email, password: password };
    Swal.fire('Successfully Done !!!','Password Updated Successfully','success')
    this.route.navigateByUrl('/login')
}


}
