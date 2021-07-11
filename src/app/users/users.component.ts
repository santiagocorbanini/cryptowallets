import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    
    public users;

    constructor(
        private service : UserService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        if(this.route.snapshot.paramMap.get('id') != null ){
            this.service
                .search(this.route.snapshot.paramMap.get('id'))
                .subscribe(response => {
                    //console.log(response);    
                    this.users = response;
                }) 
        }else{
            this.service.findAll()
            .subscribe(response => {
                //console.log(response);    
                this.users = response;
            }) 
        }
    }

}
