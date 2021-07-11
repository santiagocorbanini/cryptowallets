import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
    public name = "";
    public balance = 0.0;

  constructor(
      private userService: UserService,
      private router: Router
  ) { }

  ngOnInit() { }

  public send() {
    const user = {
      'name': this.name,
      'balance': this.balance,
    };

    this.userService.save(user)
        .subscribe(response => {
            this.router.navigate(['/']);
        });
  }

}
