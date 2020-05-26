import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import Credit from '../../models/Credit';
import Account from '../../models/Account';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  credit: Array<Credit>;
  account: Array<Account>;

  constructor(private serv: MainService) { }

  ngOnInit(): void {
    this.serv.getAllCredits().subscribe(data => {
      this.credit = data;
    });
    this.serv.getAllAcounts().subscribe(data => {
      this.account = data;
    });
  }
  getAccount(id: number): string {
    for (let v in this.account) {
      if (this.account[v].id == id) {
        return this.account[v].accountNumber;
      }
    }
  }
  
}
