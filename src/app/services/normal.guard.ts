import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class normalGuard implements CanActivate{
  constructor(private login : LoginService , private router : Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.login.isloggedIn() && this.login.getUserRole() == 'NORMAL'){
      return true;
       }
       this.router.navigate(['login'])
       return false;
      
  }
}

// export const normalGuard: CanActivateFn = (route, state) => {
//   return true;
// };
