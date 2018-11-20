import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Observable } from 'rxjs';
import { User } from './../../../core/user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>
  user: User;

  constructor(
    private userService: UserService
  ) {
    this.user$ = this.userService.getUser();
    this.user$.subscribe(user => this.user = user)
   }

  ngOnInit() {

  }

}
