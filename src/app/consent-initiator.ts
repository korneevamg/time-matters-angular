/**
 * APP_INITIALIZER
 * The provided functions are injected at application startup and executed during app initialization. If any of these functions returns a Promise or an Observable, initialization does not complete until the Promise is resolved or the Observable is completed.
 * You can, for example, create a factory function that loads language data or an external configuration, and provide that function to the APP_INITIALIZER token. The function is executed during the application bootstrap process, and the needed data is available on startup.
 * Source: https://angular.io/api/core/APP_INITIALIZER
 */

import { APP_INITIALIZER, Provider } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConsentService } from './consent.service';
import { log } from './logger';

export function initializeAppFactory(consentService: ConsentService): () => Observable<any> {
  return () => {
    log('initializeAppFactory', 'appInitializer');
    return of(consentService.initializeConfig());
  };
}

export const CONSENT_SERVICE_INITIALIZER: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeAppFactory,
  deps: [ConsentService],
  multi: true,
};
