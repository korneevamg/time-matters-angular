import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { log } from './logger';

@Injectable({
  providedIn: 'root',
})
export class WifiGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    log('WifiGuard - CanLoad', 'canLoad');
    return true;
  }
}
