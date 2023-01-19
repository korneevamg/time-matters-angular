import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { log } from './logger';

@Injectable({
  providedIn: 'root',
})
export class UserDataResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    log('UserDataResolver', 'resolver');
    return of(true);
  }
}
