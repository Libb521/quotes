import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes = [
    {id:1, name:'If you are always trying to be normal you will never know how amazing you can be', author:'Maya Angelou'},
    {id:2, name:'Tears are words that need to be written', author:'Paulo Coelho'},
    {id:3, name:'Writing books is the closest men ever come to childbearing', author:'Norman Mailer'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
