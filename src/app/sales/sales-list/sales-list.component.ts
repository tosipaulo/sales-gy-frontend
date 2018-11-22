import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SalesService } from './../sales.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  constructor(
    private salesService: SalesService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {

    this.salesService
      .list()
      .subscribe(
        (response) => console.log(response),
        (err) => {
          console.log(err.status)
          if (err.status == 401) {
            this.userService.removeUser();
            this.router.navigate(['']);
          }
        }
      )

  }


}
