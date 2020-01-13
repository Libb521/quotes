import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes [] = [
    new Quotes(1, '"If you are always trying to be normal you will never know how amazing you can be"', 'Maya Angelou', new Date(2020,1,13)),
    new Quotes(2, '"Tears are words that need to be written"', 'Paulo Coelho', new Date(2020,1,13)),
    new Quotes(3, '"Writing books is the closest men ever come to childbearing"', 'Norman Mailer', new Date(2020,1,13)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
    completeQuote(isComplete, index){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`please confirm that you want to delete ${this.quotes[index].name}?`)
    
      if (toDelete) {this.quotes.splice(index,1)}
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
