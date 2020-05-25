import { Component, OnInit } from '@angular/core';

import Account from '../../models/Account';
import Transaction from '../../models/Transaction';
import { MainService } from '../../services/main.service';
import { FormsModule } from '@angular/forms';
import Kind from '../../models/Kind';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  account: Array<Account>;
  transaction: Array<Transaction>;
  kind: Array<Kind>;
  currentId: number;
  currentAccount: Account;
  current: string;
  

  constructor(private service: MainService) { }


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

  

}
