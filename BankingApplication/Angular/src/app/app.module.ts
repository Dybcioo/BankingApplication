import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { HttpClientModule } from '@angular/common/http';

import { MainService } from './services/main.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowDirective } from './shared/show.directive';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CreditComponent } from './components/credit/credit.component';
import { ProposalComponent } from './components/proposal/proposal.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ShowDirective,
    TransactionComponent,
    CreditComponent,
    ProposalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent,AccountComponent]
})
export class AppModule { }
