import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from '../logger';
import { LoginService } from '../login.service';

log('ContactComponent - Compilation', 'file');

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private form: FormBuilder, private loginService: LoginService) {
    log('ContactComponent - constructor', 'constructor');
    this.contactForm = this.form.group({
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    log('ContactComponent - ngOnInit', 'lifecycle');
    if (this.loginService.isLoggedIn()) {
      this.contactForm.patchValue({ email: this.loginService.getEmail() });
    }
  }

  ngOnDestroy(): void {
    log('ContactComponent - ngOnDestroy', 'lifecycle');
  }

  create(): void {
    if (this.contactForm.invalid) {
      return;
    }
  }
}
