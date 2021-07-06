import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
    
    private idUser;
  
    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.idUser = this.route.snapshot.paramMap.get('id');
        console.log(this.idUser); 
    }

}
