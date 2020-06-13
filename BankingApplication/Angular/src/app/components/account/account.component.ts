import { Component, OnInit, Inject } from '@angular/core';

import Account from '../../models/Account';
import Transaction from '../../models/Transaction';
import { MainService } from '../../services/main.service';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import Kind from '../../models/Kind';
import { ProfileComponent } from '../profile/profile.component';
import Profile from '../../models/Profile';

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
  profile: Profile;
  currentId: number;
  currentAccount: Account;
  current: string;
  kaczka: boolean = false;
  isHidden: boolean = true;
  lim: number;
  showEditLimit: boolean = false;
  title: string;
  sortArr = ['Data', 'Data malejąco', 'Rodzaj operacji', 'Rodzaj operacji malejąco', 'Tytuł', 'Tytuł malejąco', 'Kwota', 'Kwota malejąco'];
  sort: string = 'Data malejąco';
  accNumber: string;

  pageSize: number = 5;
  page: number = 1;
  maxPage: number;
  numbers: Array<number>;
  

  constructor(private service: MainService, @Inject(DOCUMENT) private document: Document) { }


  ngOnInit(): void {
    this.service.getAllAcounts().subscribe(data => {
      this.account = data;
      this.currentId = this.account[0].id;
      this.currentAccount = this.account[0];
      this.service.getTransaction(this.currentAccount.id).subscribe(data => {
        this.transaction = data;
        this.transaction.sort((b, a) => new Date(a.date).getTime() - new Date(b.date).getTime());
        this.maxPage = Math.ceil(this.transaction.length / this.pageSize);
        this.numbers = Array(this.maxPage).fill(1).map((x, i) => i);
      })
    })
    this.service.getAllKinds().subscribe(data => {
      this.kind = data;
    })
    this.service.getProfile().subscribe(data => {
      this.profile = data;
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
    return direction == 0 ? "#9C2542" : "#319177";
  }
  newTrans(arg: boolean): void {
    this.kaczka = arg;
  }
  hid() {
    this.isHidden = !this.isHidden;
  }

  prev() {
    if (this.page > 1) {
      this.page--;
    }
  }

  next() {
    if (this.page < this.maxPage) {
      this.page++;
    }
    console.log(this.maxPage);
  }

  last() {
    this.page = this.maxPage;
  }
  first() {
    this.page = 1;
  }
  pagee(p:number) {
    this.page = p;
  }

  newAccount() {
    this.service.addAcount(new Account()).subscribe(data => {
      console.log(data);
    })
  }
  
  changeLimit() {
    this.profile.limit = this.lim;
    this.service.updateProfile(this.profile).subscribe(data => {
      console.log(data);
    })
    this.showLimitEdit(false);
  }
  showLimitEdit(arg: boolean) {
    this.showEditLimit = arg;
  }
  search() {
    if (this.title != "") {
      this.transaction = this.transaction.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })
      this.maxPage = Math.ceil(this.transaction.length / this.pageSize);
      this.numbers = Array(this.maxPage).fill(1).map((x, i) => i);
    } else if (this.title == "") {
      this.ngOnInit();
    }
    
  }
  search2() {
    if (this.accNumber != "") {
      this.transaction = this.transaction.filter(res => {
        return res.toAccountNumber.match(this.accNumber);
      })
      this.maxPage = Math.ceil(this.transaction.length / this.pageSize);
      this.numbers = Array(this.maxPage).fill(1).map((x, i) => i);
    } else if (this.accNumber == "") {
      this.ngOnInit();
    }

  }
  onSort() {
    switch (this.sort) {
      case 'Data':
        this.transaction.sort((b, a) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'Data malejąco':
        this.transaction.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'Rodzaj operacji':
        this.transaction.sort((b, a) => a.operationKindId - b.operationKindId)
        break;
      case 'Rodzaj operacji malejąco':
        this.transaction.sort((a, b) => a.operationKindId - b.operationKindId)
        break;
      case 'Tytuł':
        this.transaction.sort((b, a) => a.title.localeCompare(b.title));
        break;
      case 'Tytuł malejąco':
        this.transaction.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Kwota':
        this.transaction.sort((b, a) => a.amount - b.amount)
        break;
      case 'Kwota malejąco':
        this.transaction.sort((a, b) => a.amount - b.amount)
        break;
    }
  }
}
