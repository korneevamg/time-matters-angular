import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { log } from './logger';

@Injectable({
  providedIn: 'root',
})
export class SavedChangesGuard implements CanDeactivate<SavedChangesGuard> {
  canDeactivate(
    component: SavedChangesGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot,
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    log('SavedChangesGuard - canDeactivate', 'canDeactivate');
    return true;
  }
}
