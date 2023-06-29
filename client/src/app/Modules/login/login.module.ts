import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginRoutingModule } from './login-routing.module';
import { LoginTopPageComponent } from './login-top-page/login-top-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginInfoComponent } from './login-info/login-info.component';


@NgModule({
  declarations: [
    LoginTopPageComponent,
    LoginFormComponent,
    LoginInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule,
  ],
})
export class LoginModule { }
