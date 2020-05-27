import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import Profile from '../../models/Profile';
import Address from '../../models/Address';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  address: Address;
 

  constructor(private serv: MainService, private comp: AccountComponent) { }

  ngOnInit(): void {
    this.serv.getProfile().subscribe(data => {
      this.profile = data;
    })
    this.serv.getAddress().subscribe(data => {
      this.address = data;
    })
  }

  hid() {
    this.comp.hid();
  }

}
