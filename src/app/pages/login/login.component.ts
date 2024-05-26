import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginData={
    username:'',
    password:'',
  }

  constructor(private snak:MatSnackBar,private login:LoginService,private router:Router ){

  }

  ngOnInit(): void {
  }
 
  

  formSubmit(){
    console.log("Login Button Click....")
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      this.snak.open('Username is Required !!!','Ok',{
        duration:3000
      });
      return
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      this.snak.open('Password is Required !!!','Ok',{
        duration:3000
      });
      return
    }
    //Request Server To generate Token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log(data)
        console.log("Success!!!")

        //login krna ha data milna ka baad
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            //redirect krna ha   
            if(this.login.getUserRole() == "ADMIN"){
               //if admin go to admin dashboard
              //  window.location.href='/admin'
              this.router.navigate(['admin'])
              this.login.loginStatusSubject.next(true);
            }else if(this.login.getUserRole() == "NORMAL"){
              //if normal go to normal dashboard
              // window.location.href='/user-dashboard' 
              this.router.navigate(['user-dashboard/0'])
              this.login.loginStatusSubject.next(true);
            }else{
              this.login.logout();
              location.reload();
            }
          }
        )
      },
      (error)=>{
        console.log('Error!!!')
        console.log(error);
        this.snak.open('Invalid Details !!','TRY AGAIN',{
          duration:3000
        })
      }
    )
  }

}
function togglePasswordVisibility() {
  throw new Error('Function not implemented.');
}

