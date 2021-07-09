import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

    public sender;
    public receiver;
    public money;

    constructor(
        private service: UserService,
        private router: Router
    ) { }

  ngOnInit(): void {
  }

  public sendTransfer() {
    const transferMoney = {
      'sender': this.sender,
      'receiver': this.receiver,
      'money': this.money
    };

    this.service.transfer(transferMoney)
        .subscribe(response => {
            console.log(response);
            this.router.navigate(['/']);
        });
    }

}
