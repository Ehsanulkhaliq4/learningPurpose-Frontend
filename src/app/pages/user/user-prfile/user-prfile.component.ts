import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-user-prfile',
  templateUrl: './user-prfile.component.html',
  styleUrl: './user-prfile.component.css'
})
export class UserPrfileComponent {

  user:any;
  constructor(private login:LoginService){}
  ngOnInit(): void {

    // this.user=this.login.getUser();
    this.login.getCurrentUser().subscribe(
    (user:any)=>{
      this.user=user;
    },
    (error)=>{
      alert('YOUR_NOT_FOUND | Server Not Working ')
    }
    )
    
  }

}
