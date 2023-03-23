import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService:AccountService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
     let user
    this.accountService.userV.subscribe(us=>user = us)
      console.log(user)


      if(user){
        
        return true
      } 
        
      this.router.navigate(['login'])
      return false
  }
}
