import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { HttpClientModule } from '@angular/common/http';

import { MainService } from './services/main.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowDirective } from './shared/show.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ShowDirective
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
