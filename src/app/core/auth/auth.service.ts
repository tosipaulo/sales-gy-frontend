import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

import { environment } from '../../../environments/environment'
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private userService: UserService) { }

  authenticate( email: string, password: string) {

    return this.http
      .post(`${environment.api}/auth/authenticate`, {email, password})
      .pipe(tap(res => {
        this.tokenService.setToken(res['token']);
        this.userService.setUser(res['user'])
      }))

  }
}
