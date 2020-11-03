import {Injectable, Injector} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './services/authentication.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  jwt: JwtHelperService;

  constructor(private router: Router,
              private authService: AuthenticationService) {
  }

  canActivate(): boolean {
    if (this.authService.getToken()) {
      // logged in so return true
      //  decode token and make sure that it is not expired, or in getToken method
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }

}
