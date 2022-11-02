import { NgModule } from '@angular/core';
import { PasswordValidatorComponent } from './passcode-validator.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PasswordStrengthMeterComponent } from './password-strength-meter/password-strength-meter.component';
import { PasswordStrengthValidatorDirective } from './password-validator-directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PasswordValidatorComponent,
    PasswordStrengthMeterComponent,
    PasswordStrengthValidatorDirective
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    PasswordValidatorComponent
  ]
})
export class PasscodeValidatorModule { }
