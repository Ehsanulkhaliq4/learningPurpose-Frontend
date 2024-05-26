import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

  categories:any;
  isloggedIn=false;
  user :any;

  constructor(private _cat:CategoryService,
    private _snack:MatSnackBar,
    public login:LoginService,
    private router:Router){}

  ngOnInit(): void {
   this._cat.categories().subscribe(
    (data)=>{
      this.categories = data;
    },
    (error)=>{
      this._snack.open('Error in Loading Categories from Server','',{
        duration:3000
      })
    }
   )
  }
}
