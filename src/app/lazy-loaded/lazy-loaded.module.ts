import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleParentComponent } from './lifecycle-parent/lifecycle-parent.component';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';
import { log } from '../logger';

export const routes: Routes = [
  {
    path: '',
    component: LifecycleParentComponent,
  },
];

@NgModule({
  declarations: [LifecycleParentComponent, LifecycleChildComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  bootstrap: [LifecycleParentComponent],
})
export class LazyLoadedModule {
  constructor() {
    log('LazyLoadedModule - constructor', 'constructor');
  }
}
