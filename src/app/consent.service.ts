import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { log } from './logger';

/**
 * @description This service is used to demonstrate the initialisation behaviour in case of APP_INITIALIZER (cf. consent-initiator.ts and app.module)
 */

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  private consentPopupState: Subject<boolean> = new Subject();

  constructor() {
    log('ConsentService - constructor', 'appInitializer');
  }
  getConsentConfig() {
    return {
      necessary: localStorage.getItem('necessary') || false,
      marketing: localStorage.getItem('marketing') || false,
    };
  }

  public showConsentPopup() {
    return this.consentPopupState;
  }

  initializeConfig() {
    const consentConfig = this.getConsentConfig();
    if (!consentConfig.necessary) this.consentPopupState.next(true);
  }
}
