import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  categories:any;

  constructor(private _cat:CategoryService,private _snack:MatSnackBar){}

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
