import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SecuredGuard implements CanActivate {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState.pipe(map(auth => {
      if (auth) {
        this.router.navigate(['/profile']);
        return false;
      } else {
        return true;
      }
    }));
  }
}

// arr - [4,5,9,2,7,1]
// arr.forEach(value => {value*2});
// arr = arr.map(value => {value*2});
