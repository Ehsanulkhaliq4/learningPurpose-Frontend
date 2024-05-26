import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isloggedIn=false;
  user :any;
  constructor(public login:LoginService){}
  ngOnInit(): void {
    this.isloggedIn=this.login.isloggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isloggedIn=this.login.isloggedIn();
      this.user=this.login.getUser(); 
    });
  }
  public logout(){
    this.login.logout();
    window.location.reload();
  }
}
