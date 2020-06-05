import { Injectable, NgZone } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private ngZone: NgZone, private router: Router) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      Auth.currentAuthenticatedUser({
        bypassCache: false
      })
        .then((user) => {
          if (user) {
            resolve(true);
          }
        })
        .catch(() => {
          this.ngZone.run(() => this.router.navigate(['/login']));
          resolve(false);
        });
    });
  }
}