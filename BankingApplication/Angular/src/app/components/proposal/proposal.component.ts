import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import Proposal from '../../models/Proposal';
import Account from '../../models/Account';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  proposal: Array<Proposal>;
  account: Array<Account>;

  constructor(private serv: MainService) { }

  ngOnInit(): void {
    this.serv.getAllProposals().subscribe(data => {
      this.proposal = data;
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

  getStatus(id: number): string {
    if (id == 0) {
      return 'Rozpatrzany';
    } else if (id == 1) {
      return 'Zaakceptowany';
    } else {
      return 'Odrzucony';
    }
  }
  getColor(id: number): string {
    if (id == 0) {
      return 'yellow';
    } else if (id == 1) {
      return 'green';
    } else {
      return 'red';
    }
  }

}
