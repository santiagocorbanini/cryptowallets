import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { WalletComponent } from './wallet/wallet.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewUserComponent,
    UsersComponent,
    UserComponent,
    WalletComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
