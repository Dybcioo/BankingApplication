import { Component, OnInit, Inject } from '@angular/core';

import Account from '../../models/Account';
import Transaction from '../../models/Transaction';
import { MainService } from '../../services/main.service';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import Kind from '../../models/Kind';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public LOCAL = 'https://localhost:44305/HomeAngular/';
  account: Array<Account>;
  transaction: Array<Transaction>;
  public kind: Array<Kind>;
  currentId: number;
  currentAccount: Account;
  current: string;
  kaczka: boolean = false;
  isHidden: boolean = true;
  

  constructor(private service: MainService, @Inject(DOCUMENT) private document: Document) { }


  ngOnInit(): void {
    this.service.getAllAcounts().subscribe(data => {
      this.account = data;
      this.currentId = this.account[0].id;
      this.currentAccount = this.account[0];
      this.service.getTransaction(this.currentAccount.id).subscribe(data => {
        this.transaction = data;
      })
    })
    this.service.getAllKinds().subscribe(data => {
      this.kind = data;
    })
    
  }

  check(event) {
    for (let v in this.account) 
    {
      if (this.account[v].id == event.target.value) {
        this.currentAccount = this.account[v];
        this.service.getTransaction(this.currentAccount.id).subscribe(data => {
          this.transaction = data;
        })
      }
    }  
  }

  getColor(direction: number): string {
    return direction == 0 ? "red" : "green";
  }
  newTrans(arg: boolean): void {
    this.kaczka = arg;
  }
  hid() {
    this.isHidden = !this.isHidden;
  }

}
