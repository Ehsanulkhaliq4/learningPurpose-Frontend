import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  constructor(private userService:UserService , private snack:MatSnackBar){}

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  };

  ngOnInit(): void {}

  formSubmit(){
    console.log(this.user)
    if(this.user.username =='' || this.user.username == null || this.user.email == '' || this.user.email == null)
    {
      // alert("User Is Required !!!");
      this.snack.open("Username & Email are required !!!" ,'Ok',{
        duration:3000,
        verticalPosition:'top',
      })
      return;
    }
    //Add User Call
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        // alert('success');
        Swal.fire('Successfully Done !!!','User with id '+data.id+' & username '+data.username+' is created','success')
        return;
      },
      (error)=>{
        //error
        console.log(error);
        // alert('something went wrong')
        this.snack.open('Something went wrong !!!' ,'' ,{
          duration:3000
        })
      }
    );
  }

}
