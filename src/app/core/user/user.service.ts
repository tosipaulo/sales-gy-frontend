import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './../token/token.service';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null)
  private user: any;

  constructor( private tokenService: TokenService ) {
    this.getUserStorage();
   }

  setUser(user: User) {
    window.localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user)
  }

  getUser(){
    return this.userSubject.asObservable()
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  private getUserStorage() {
    const user = window.localStorage.getItem('user');
    this.userSubject.next(JSON.parse(user))
  }

}
