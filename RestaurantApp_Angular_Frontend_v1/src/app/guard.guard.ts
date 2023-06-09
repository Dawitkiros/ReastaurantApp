import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private login : LoginComponent, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log(localStorage.getItem("userRole"));
      
    if(localStorage.getItem("userRole") === "admin"){
      console.log("guard called");
      return true;
    }else{
      this.router.navigate(['/Error'])
      return false;
    }
  }
  
}
