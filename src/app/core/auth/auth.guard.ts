import { UserService } from './../user/user.sevice';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private userSerivce: UserService,
    private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.userSerivce.isLogged()) {
      this.router.navigate(['user', this.userSerivce.getUserName()]);
      return false;
    }

    return true;
  }

}
