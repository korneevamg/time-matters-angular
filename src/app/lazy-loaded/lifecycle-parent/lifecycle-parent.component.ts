import { Component, SimpleChanges } from '@angular/core';
import { log } from 'src/app/logger';

@Component({
  selector: 'app-lifecycle-parent',
  templateUrl: './lifecycle-parent.component.html',
  styleUrls: ['./lifecycle-parent.component.scss'],
})
export class LifecycleParentComponent {
  public counter = 0;
  /** The most important thing is, the constructor is called when Angular constructs the components tree, while ngOnInit is run after the change detection when all bindings are updated.
   * Construction time is when the dependency injection takes place because at this point Angular has already configured the root module injector and all of the parent injectors. This is not the time when DOM is ready and we can access input properties, elements, and child components. Properties such as input properties, static children will be accessible in the ngOnInit. Other non-static elements will be available in onAfterViewInit hook.
   * https://indepth.dev/posts/1508/structure-initialization-logic-without-ngoninit-utilize-observables-and-ngonchanges#why-couldn%E2%80%99t-we-use-a-constructor-instead
   */
  constructor() {
    log('LifecycleParentComponent - constructor', 'constructor');
  }

  increase() {
    this.counter++;
  }

  ngDoCheck(): void {
    log('LifecycleParentComponent - ngDoCheck', 'lifecycle');
  }

  ngOnChanges(changes: SimpleChanges): void {
    log('LifecycleParentComponent - ngOnChanges', 'lifecycle');
  }
  ngOnDestroy(): void {
    log('LifecycleParentComponent - ngOnDestroy', 'lifecycle');
  }
  ngAfterContentChecked(): void {
    log('LifecycleParentComponent - ngAfterContentChecked', 'lifecycle');
  }
  ngAfterContentInit(): void {
    log('LifecycleParentComponent - ngAfterContentInit', 'lifecycle');
  }
  ngAfterViewChecked(): void {
    log('LifecycleParentComponent - ngAfterViewChecked', 'lifecycle');
  }
  ngAfterViewInit(): void {
    log('LifecycleParentComponent - ngAfterViewInit', 'lifecycle');
  }
  ngOnInit(): void {
    /**
     * As we learnt above when Angular calls ngOnInit it has finished creating a component DOM, injected all required dependencies through constructor and processed input bindings. So here you have all the required information available which makes it a good place to perform initialization logic.
     */
    log('LifecycleParentComponent - ngOnInit', 'lifecycle');
  }
}
