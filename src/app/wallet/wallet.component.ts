import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
    
    public idUser;
    public user;
    public wallets;
    public nameCurrency;
    public currency;
  
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService
    ) { }

    ngOnInit() {
        this.idUser = this.route.snapshot.paramMap.get('id');
        this.service.find(this.idUser)
            .subscribe(response => {
                this.user = response;
            }, error => {
                this.router.navigate(['/']);
        });
        this.service.findWallets(this.idUser)
            .subscribe(response => {
                this.wallets  = response;
            }, error => {
                this.router.navigate(['/']);
        });
    }

    public sendWallet(){
        const data = {
            "nameCurrency": this.nameCurrency,
            "currency": this.currency,
            "idUser": this.user.id
        };
        this.service.addWallet(data)
            .subscribe(response => {
                this.ngOnInit();
            });
    }
}
