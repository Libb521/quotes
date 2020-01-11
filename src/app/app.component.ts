import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];
 
  constructor(){
    this.quotes =['If you are always trying to be normal you will never know how amazing you can be (Maya Angelou)', 'Tears are words that need to be written (Paulo Coelho)', 'Writing books is the closest men ever come to childbearing (Norman Mailer)']
  }
}
