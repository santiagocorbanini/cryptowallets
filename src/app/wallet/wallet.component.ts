import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
    
    private idUser;
    public user;
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
    }

    public sendWallet(){
        const data = {
            "nameCurrency": this.nameCurrency,
            "currency": this.currency
        };
        this.service.addWallet(this.user.id, data)
            .subscribe(response => {
                this.ngOnInit();
            });
    }
}
