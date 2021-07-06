import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    public users;

  constructor(
      private service : UserService
  ) { }

  ngOnInit(): void {
      this.service.findAll()
          .subscribe(response => {
              console.log(response);    
              this.users = response;
          })  
  }

}
