import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  inputValue: any = {
    company: "",
    name: '',
    email: "",
    password: "",
    confPassword: "",
  }

  error: any = {
    company: "",
    name: '',
    email: "",
    password: "",
    confPassword: "",
  }

  buttonDisabled: boolean = false;
  validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  constructor(private auth: ApiServicesService) { }

  toggleDiableButton() {
    this.buttonDisabled = !this.buttonDisabled
  }

  inputHandler(e: any) {
    let val = e.target.value;
    switch (e.target.name) {
      case 'company':
        this.inputValue.company = val;
        break

      case 'name':
        this.inputValue.name = val;
        break

      case 'email':
        this.inputValue.email = val;
        break

      case 'password':
        this.inputValue.password = val;
        break

      case 'confPassword':
        this.inputValue.confPassword = val;
        break

      default:
        break
    }
  }

  submit(e: any) {
    this.buttonDisabled = !this.buttonDisabled
    let isEmpty = Object.values(this.inputValue).some((value) => value === '');

    for (let [key, value] of Object.entries(this.inputValue)) {
      if (value === "") {
        this.error[key] = `Field is required`
      } else {
        this.error[key] = ``
      }
    }

    if (!this.inputValue.email.match(this.validRegex)) {
      this.error.email = "Email inValid"
    } else {
      this.error.email = ""
    }

    if (isEmpty) {
      this.toggleDiableButton()
      return
    }

    if (this.inputValue.password !== this.inputValue.confPassword) {
      this.error.confPassword = "Password and Confirm password must be same"
      this.toggleDiableButton()
      return
    } else {
      this.error.confPassword = ""
    }


    this.auth.register(this.inputValue);

    this.toggleDiableButton()
    alert("OK")
  }

}
