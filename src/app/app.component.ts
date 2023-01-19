import { Component, HostListener } from '@angular/core';
import { log } from './logger';

log('AppComponent - Compilation', 'file');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /** The beforeunload event will not make your pages ineligible for bfcache in Chrome or Safari, but it will make them ineligible in Firefox, so avoid using it unless absolutely necessary.
   * https://web.dev/bfcache/
   */
  @HostListener('window:beforeunload', ['$event'])
  public async onBeforeUnload(event: Event) {
    log('onBeforeUnload', 'beforeunload');
    // set some value to enforce the unload dialog, some browsers do not show it without any value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((event as any).returnValue = 'Are you sure you wanna leave?');
  }

  constructor() {
    log('AppComponent - constructor', 'constructor');
  }
}
