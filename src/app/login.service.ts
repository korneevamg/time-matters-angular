import { Injectable } from '@angular/core';
import { log } from './logger';

/**
 * @description This service demonstrates the default initialisation behaviour. The constructor is called as soon as the service is consumed for the first time, e.g. the first component that injects it is initialized.
 */

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {
    log('LoginService - constructor', 'constructor');
  }

  isLoggedIn() {
    return true;
  }

  getEmail() {
    return 'logged-in@gmail.com';
  }
}
