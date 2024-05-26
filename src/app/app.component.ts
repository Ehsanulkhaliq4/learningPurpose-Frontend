import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None // Set encapsulation mode here
})
export class AppComponent {
  title = 'Learning-Purpose';
}
