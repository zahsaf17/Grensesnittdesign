import { Component } from '@angular/core';


@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  text: string;

  constructor() {
    console.log('Hello NavbarComponent Component');
    this.text = 'Hello World';
  }

}
