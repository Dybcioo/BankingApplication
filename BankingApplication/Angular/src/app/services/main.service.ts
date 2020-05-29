import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

import Account from '../models/Account';
import Transaction from '../models/Transaction';
import Kind from '../models/Kind';
import Credit from '../models/Credit';
import Proposal from '../models/Proposal';
import Profile from '../models/Profile';
import Address from '../models/Address';
import Bank from '../models/bank';

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
  public PROFILE_ENDPOINT = `${this.API}/Profiles`;
  public ADDRESS_ENDPOINT = `${this.API}/Addresses`;
  public BANK_ENDPOINT = `https://jakitobank.pl/api/?numer=`;

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
  addProposal(prop: Proposal): Observable<Proposal> {
    return this.http.post<Proposal>(this.PROPOSAL_ENDPOINT, prop);
  }
  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.PROFILE_ENDPOINT);
  }
  getAddress(): Observable<Address> {
    return this.http.get<Address>(this.ADDRESS_ENDPOINT);
  }
  addAcount(acc: Account): Observable<Account> {
    return this.http.post<Account>(this.ACCOUNT_ENDPOINT, acc);
  }
  getBank(num: string): Observable<Bank> {
    return this.http.get<Bank>(this.BANK_ENDPOINT + num);
  }
}
