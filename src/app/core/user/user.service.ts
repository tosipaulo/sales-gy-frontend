import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null)
  private user: any;

  constructor( ) {
    this.getUserStorage();
   }

  setUser(user: User) {
    window.localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user)
  }

  getUser(){
    return this.userSubject.asObservable()
  }

  private getUserStorage() {
    const user = window.localStorage.getItem('user');
    this.userSubject.next(JSON.parse(user))
  }

}
