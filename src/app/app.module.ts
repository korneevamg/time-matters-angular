import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONSENT_SERVICE_INITIALIZER, initializeAppFactory } from './consent-initiator';
import { ContentItemComponent } from './content-item/content-item.component';
import { log } from './logger';

/**
 * Here, Angular loads all the modules, directives and pipes metadata. Then, it compiles all the components. During the compilation of the components, it searches for all components metadata registered in the application, then asks the compiler to compile all component’s templates in place. The last thing we need to do here is to actually compile the root application module. On that stage, Angular resolves all the required metadata for the module and return module factory.
 * return this._loadModules(moduleType)
      .then(() => {
        this._compileComponents(moduleType);
        return this._compileModule(moduleType);
      });
 * https://medium.com/angular-in-depth/angular-platforms-in-depth-part-2-application-bootstrap-process-8be461b4667e
 */
log('AppModule - Compilation', 'file');
@NgModule({
  declarations: [AppComponent, ContentItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    CONSENT_SERVICE_INITIALIZER,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useFactory: () => {
        return (component: ComponentRef<any>) => {
          log('APP_BOOTSTRAP_LISTENER ' + component.componentType.name, 'main');
        };
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    log('AppModule - constructor', 'constructor');
  }
}
