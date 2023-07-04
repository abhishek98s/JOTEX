import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ApiServicesService } from 'src/app/services/api-services.service';

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

  error: any = {
    email: '',
    password: ''
  }

  buttonDisabled: boolean = false;

  constructor(public auth: AppService, private login: ApiServicesService, private router: Router) { }

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

    this.buttonDisabled = !this.buttonDisabled
    // this.auth.login();
    let isEmpty = Object.values(this.inputValue).some((value) => value === '');

    for (let [key, value] of Object.entries(this.inputValue)) {
      if (value === "") {
        this.error[key] = `Field is required`
      } else {
        this.error[key] = ``
      }
    }

    if (isEmpty) {
      this.buttonDisabled = !this.buttonDisabled
      return
    }

    this.login.login(this.inputValue).subscribe(data => {
      localStorage.setItem("login", JSON.stringify(data))
      this.router.navigate(['/']);
    })

    this.buttonDisabled = !this.buttonDisabled
    alert("OK")
  }
}