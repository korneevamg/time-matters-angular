import { PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { log } from './app/logger';
import { TrackingService } from './app/tracking.service';

const platformInitFactory = (a: TrackingService): (() => void) => {
  log('PLATFORM_INITIALIZER factory called', 'main', a);
  return () => {
    log('PLATFORM_INITIALIZER callback', 'main');
  };
};

/**
 * https://github.com/angular/angular/blob/8802b4aab9600870f3e09f198c993845587e9622/packages/core/src/application_ref.ts
 * https://indepth.dev/posts/1003/hooking-into-the-angular-bootstrap-process#bootstrapmodule
 * https://dev.to/ayyash/the-mystic-three-tokens-of-angular-appbootstraplistener-appinitializer-platforminitializer-76j
 */
const bootstrapFn = () => {
  log('Main.ts', 'main');
  return platformBrowserDynamic([
    {
      /** platformBrowserDynamic is a platform factory — a function which creates new instances of platforms. The result of the platformBrowserDynamic function call is a PlatformRef. PlatformRef is a plain Angular service which knows how to bootstrap our applications.
       * https://medium.com/angular-in-depth/angular-platforms-in-depth-part-1-what-are-angular-platforms-9919d45f3054
       */
      // PLATFORM_INITIALIZER gets called first but has no visibility for dependencies
      provide: PLATFORM_INITIALIZER,
      useValue: platformInitFactory, // will be created
      multi: true,
      deps: [TrackingService], // will be created to see if it works
    },
  ]).bootstrapModule(AppModule);
};

/* platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); */

bootstrapFn();
