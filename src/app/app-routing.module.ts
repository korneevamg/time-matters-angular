import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentItemComponent } from './content-item/content-item.component';
import { LoginGuard } from './login.guard';
import { Over18Guard } from './over-18.guard';
import { SavedChangesGuard } from './saved-changes.guard';
import { UserDataResolver } from './user-data.resolver';
import { WifiGuard } from './wifi.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'content',
  },
  /** When both guard and resolvers are specified, the resolvers are not executed until all guards have run and succeeded.
   * Source: https://angular.io/api/router/Resolve#usage-notes
   */
  {
    path: 'content',
    canActivate: [LoginGuard],
    resolve: { userData: UserDataResolver },
    loadComponent: () => import('./content/content.component').then((m) => m.ContentComponent),
    /** Whenever there is a route change inside the Angular application, Angular finds the appropriate component and loads it inside router-outlet , but before doing that, there is an abstract class called RouteReusedStrategy , and Angular askes it, “Hey I’m going to change the route, do you want to cache this route and reuse it later?”. That’s the place we have to intercept to fit our needs. But let’s first examine how this class works by default.
     * By default, Angular only reuses the same route if it's the routeParam change, meaning that the path is the same but param arguments are changed, like /user/john -> /user/doe , otherwise, it will create a new component every time. The implementation of this condition resides in theDefaultRouteReuseStrate class
     * https://medium.com/swlh/how-to-toggle-caching-for-routing-components-in-angular-5a327ea87310 */
    children: [{ path: ':id', canActivate: [Over18Guard], component: ContentItemComponent }],
  },
  {
    path: 'contact',
    canDeactivate: [SavedChangesGuard],
    loadComponent: () => import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'lazy-loaded',
    canActivate: [LoginGuard],
    canLoad: [WifiGuard],
    loadChildren: () => import('./lazy-loaded/lazy-loaded.module').then((m) => m.LazyLoadedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
