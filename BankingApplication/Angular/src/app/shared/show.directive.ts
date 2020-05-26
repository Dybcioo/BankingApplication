import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';
import Transaction from '../models/Transaction';
import { DatePipe } from '@angular/common';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {

  @Input()
  transaction: Transaction;

  @Input()
  id: number;

  @Input()
  kind: string;

  private myDiv;

  constructor(private el: ElementRef, private render: Renderer2) {
    this.myDiv = this.render.createElement('div');
  }


    @HostListener('mouseenter')
    mouseEnter() {
      if (this.transaction.direction == 0) {
        this.myDiv.innerHTML = "<br><hr>Transakcja " + this.id + " ==>  " + this.transaction.toAccountNumber + "<br>Kwota transakcji: " + this.transaction.amount + " PLN<br>Rodzaj: " + this.kind +
          "<br><br>Data: " + this.transform(this.transaction.date) + "<br><br> Opis:<br>" + (this.transaction.description == null ? "Brak" : this.transaction.description) + "<br><br>ID transakcji: " + this.transaction.id;
      } else {
        this.myDiv.innerHTML = "<br><hr>Transakcja " + this.transaction.toAccountNumber + " ==>  " + this.id + "<br>Kwota transakcji: " + this.transaction.amount + " PLN<br>Rodzaj: " + this.kind +
          "<br><br>Data: " + this.transform(this.transaction.date) + "<br><br> Opis:<br>" + (this.transaction.description == null ? "Brak" : this.transaction.description) + "<br><br>ID transakcji: " + this.transaction.id;
      }
      this.render.setStyle(this.myDiv, 'background-color', 'black');
      this.render.insertBefore(this.el.nativeElement.parentElement, this.myDiv, this.el.nativeElement.nextSibling);

    }

    @HostListener('mouseleave')
    mouseLeave() {
      this.myDiv.innerHTML = '';
    }


    transform(value: Date) {
      var datePipe = new DatePipe("en-US");
      return datePipe.transform(value, 'dd/MM/yyyy hh:mm');
    }
}

