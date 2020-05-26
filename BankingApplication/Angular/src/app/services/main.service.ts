import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

import Account from '../models/Account';
import Transaction from '../models/Transaction';
import Kind from '../models/Kind';
import Credit from '../models/Credit';
import Proposal from '../models/Proposal';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public API = 'https://localhost:44305/api';
  public ACCOUNT_ENDPOINT = `${this.API}/Accounts`;
  public TRANSACTION_ENDPOINT = `${this.API}/Transactions`;
  public KIND_ENDPOINT = `${this.API}/OperationKinds`;
  public CREDIT_ENDPOINT = `${this.API}/Credits`;
  public PROPOSAL_ENDPOINT = `${this.API}/Proposals`;

  constructor(private http: HttpClient) { }

  getAllAcounts(): Observable<Array<Account>> {
    return this.http.get<Array<Account>>(this.ACCOUNT_ENDPOINT);
  }
  getTransaction(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.TRANSACTION_ENDPOINT+"/"+id);
  }
  getAllKinds(): Observable<Array<Kind>> {
    return this.http.get<Array<Kind>>(this.KIND_ENDPOINT);
  }
  addTransaction(trans: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.TRANSACTION_ENDPOINT, trans);
  }
  getAllCredits(): Observable<Array<Credit>> {
    return this.http.get<Array<Credit>>(this.CREDIT_ENDPOINT);
  }
  getAllProposals(): Observable<Array<Proposal>> {
    return this.http.get<Array<Proposal>>(this.PROPOSAL_ENDPOINT);
  }
}
