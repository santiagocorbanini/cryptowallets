import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

    public sender;
    public receiver;
    public money;
    public wallets;
    public senderId;
    public receiverId;

    isAlertOkey = false;
    isAlertFail = false;

    constructor(
        private service: UserService,
        private router: Router,
        public fb: FormBuilder
    ) { }

 /*########### Form ###########*/
 registrationForm = this.fb.group({
    senderId: ['', [Validators.required]],
    receiverId: ['', [Validators.required]]
  })


  // Choose city using select dropdown
  changeCity(e) {
    this.senderId = JSON.stringify(this.registrationForm.value.senderId);
    this.receiverId = JSON.stringify(this.registrationForm.value.receiverId);
  }

    ngOnInit(): void {

        this.service.showWallets()
            .subscribe(response => {
                this.wallets  = response;
        });
  }

  public sendTransfer() {
    const transferMoney = {
      'sender': this.senderId,
      'receiver': this.receiverId,
      'money': this.money
    };

    this.service.transfer(transferMoney)
        .subscribe(response => {
            if (response[0] == undefined){
                this.isAlertFail = true; 
                this.isAlertOkey = false;
            } else {
                this.isAlertOkey = true; 
                this.isAlertFail = false; 
            }
            console.log(response.toLocaleString);
            console.log(response[0]);
            this.money = 0;
            this.service.showWallets()
                .subscribe(response => {
                    this.wallets  = response;
            });
        });
    }

}
