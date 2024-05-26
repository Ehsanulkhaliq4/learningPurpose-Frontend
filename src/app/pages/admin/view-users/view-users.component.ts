import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent {

  users:any=[]

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data
        console.log(this.users);
        
      },
      (error) => {
        Swal.fire('Error !!!','Error in loading data from server','error')
      }
    )
  }
  deleteQuiz(uId:any)
  {
   Swal.fire({
    icon:'warning',
    title:"Are you sure !!!",
    confirmButtonText:'Delete',
    showCancelButton:true
   }).then((result)=>{
    if(result.isConfirmed){
      //delete
      this.userService.deleteUser(uId).subscribe(
        (data)=>{
          this.users = this.users.filter((user:any)=> user.qId != uId)
          window.location.reload();
        },
        (error)=>{
          Swal.fire('Error','User is Not Deleted','error');
        }
      )
    }
   })
  }

}
