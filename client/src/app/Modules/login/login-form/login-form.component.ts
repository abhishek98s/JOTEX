import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  inputValue = {
    email: '',
    password: ''
  }

  error = {
    email: '',
    password: ''
  }

  constructor(public auth: AppService) { }

  inputHandler(e: any) {
    let val = e.target.value;
    switch (e.target.name) {
      case 'email':
        this.inputValue.email = val;
        break

      case 'password':
        this.inputValue.password = val;
        break

      default:
        break
    }
  }

  submit(e: any) {
    this.auth.login();

    let isEmptyValues = Object.values(this.inputValue).every((value) => value === '');

    if (isEmptyValues) {
      this.error.email = 'Email is reqired'
      this.error.password = 'Password is reqired'
      return
    }

    if (!this.inputValue.email) {
      this.error.email = 'Email is required'
    }

    if (!this.inputValue.password) {
      this.error.password = 'Password is reqired'
    } else {
      this.error.password = ''
    }

    // e.target.reset()
  }
}