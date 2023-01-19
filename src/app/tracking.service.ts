import { Injectable } from '@angular/core';
import { log } from './logger';

/**
 * @description This service is used to demonstrate that we don't have access to the services yet when we use PLATFORM_INITIALIZER (cf. main.ts)
 */

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  constructor() {
    log('TrackingService - constructor', 'constructor');
  }
}
