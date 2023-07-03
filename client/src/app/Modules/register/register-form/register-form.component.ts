import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  inputValue: any = {
    company: "",
    email: "",
    password: "",
    confPassword: "",
  }

  error: any = {
    company: "",
    email: "",
    password: "",
    confPassword: "",
  }


  inputHandler(e: any) {
    let val = e.target.value;
    switch (e.target.name) {
      case 'company':
        this.inputValue.company = val;
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

    for (let [key, value] of Object.entries(this.inputValue)) {
      if (value === "") {
        this.error[key] = `Field is required`
      } else {
        this.error[key] = ``
      }
    }

  }

}
