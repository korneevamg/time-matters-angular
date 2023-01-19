import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { log } from './logger';

/**
 * @description This guard is used to demonstrate a different sequnce of execution in case of nested routes (cf. app-routing)
 */

@Injectable({
  providedIn: 'root',
})
export class Over18Guard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    log('Over18Guard', 'canActivate');
    return true;
  }
}
