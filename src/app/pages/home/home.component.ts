import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from '../contactPopUp/contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private dialog:MatDialog){}

  openpopup(){
    this.dialog.open(ContactUsComponent)
  }
}
