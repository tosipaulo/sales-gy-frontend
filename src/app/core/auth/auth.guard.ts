import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UserService } from 'src/app/core/user/user.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate{

  constructor(
    private userService: UserService,
    private router: Router
  ){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>{

    if(this.userService.isLogged()) {
      this.router.navigate(['sales'])
      return false;
    }

    return true
  }
}
