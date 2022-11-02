import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { validatePasswordStrength } from './password-validator-directive';

@Component({
  selector: 'passcode-validator-lib',
  templateUrl: 'passcode-validator.component.html',
  styleUrls: ['passcode-validator.component.scss']
})
export class PasswordValidatorComponent implements OnInit {

  @Input()
  matLabel: string = 'Password';
  @Input()
  matErrorWeak: string = 'Weak Password';
  @Input()
  matErrorInvalid: string = 'Invalid Password';
  @Input()
  matFormFieldAppearance: MatFormFieldAppearance = 'legacy';

  _passwordRevealed: boolean = false;
  validatorFromGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const fb = new FormBuilder();
    this.validatorFromGroup = new FormGroup({
      password: fb.control(null, Validators.required, validatePasswordStrength)
    });
  }

}
