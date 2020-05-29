import { Component, OnInit, Input } from '@angular/core';
import Transaction from '../../models/Transaction';
import Kind from '../../models/Kind';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Account from '../../models/Account';
import { MainService } from '../../services/main.service';
import Credit from '../../models/Credit';
import Bank from '../../models/bank';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transaction: Transaction = new Transaction();
  credit: Array<Credit>;
  bank: Bank;

  form = new FormGroup({
    accountId: new FormControl(''),
    operationKindId: new FormControl(''),
    title: new FormControl(''),
    amount: new FormControl(''),
    toAccountNumber: new FormControl(''),
    description: new FormControl(''),
    creditId: new FormControl('')
  });

  @Input()
  kind: Array<Kind>;


  account: Array<Account>;
  currentKind: Kind;
  currentId: number;
  error: string;

 
  constructor(private service: MainService, private acc: AccountComponent) {}


  ngOnInit(): void {
     this.service.getAllAcounts().subscribe(data => {
       this.account = data;
       this.form.controls['accountId'].setValue(this.account[0].id);
     });
    this.service.getAllCredits().subscribe(data => {
      this.credit = data;
      this.form.controls['creditId'].setValue(this.credit[0].id);
    });
    this.form.controls['operationKindId'].setValue(this.kind[0].id);
    this.currentId = 1;
    
  }


  onSubmit() {
    this.transaction = this.form.value;
    
    if (this.currentId == 1) {
      this.transaction.direction = 0;
    } else if (this.currentId == 2) {
      this.transaction.direction = 1;
      this.transaction.toAccountNumber = '';
      this.transaction.title = "Wpłata na własny rachunek";
    } else if (this.currentId == 3) {
      this.transaction.direction = 0;
      this.transaction.toAccountNumber = '';
      this.transaction.title = "Wypłata z własnego rachunku";
    } else {
      this.transaction.direction = 0;
      this.transaction.toAccountNumber = '';
      this.transaction.title = "Spłata kredytu";
    }
    if (this.transaction.amount >= this.getAccount(this.transaction.accountId).balance && this.currentId != 2) {
      this.error = 'Kwota transakcji przekracza środki na podanym koncie!';
    } else {
      this.form.reset();
      this.error = '';
      this.service.addTransaction(this.transaction).subscribe(data => {
        console.log(data);
      });
      this.exit(false);
    }
  }

  check(event) {
    for (let v in this.kind) {
      if (this.kind[v].id == event.target.value) {
        this.currentKind = this.kind[v];
        this.currentId = Number.parseInt(v) + 1;
        if (this.currentId == 1) {
          this.form.get('toAccountNumber').setValidators(Validators.required);
          this.form.get('toAccountNumber').updateValueAndValidity();
        } else {
          this.form.get('toAccountNumber').clearValidators();
          this.form.get('toAccountNumber').updateValueAndValidity();
        }
        if (this.currentId != 1) {
          this.form.get('title').clearValidators();
          this.form.get('title').updateValueAndValidity();
        }
      }
    }  
  }


  getAccount(id: number): Account {
    for (let v in this.account) {
      if (this.account[v].id == id) {
        return this.account[v];
      }
    }
  }

  onSearchChange(searchValue: string): void {
    if (searchValue.length > 25) {
      this.service.getBank(searchValue).subscribe(data => {
        this.bank = data;
      })
    } else {
      this.bank = null;
    }
  }

  exit(arg: boolean) {
    this.acc.newTrans(arg);
  }

}
