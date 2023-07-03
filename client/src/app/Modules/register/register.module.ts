import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterTopPageComponent } from './register-top-page/register-top-page.component';
import { RouterModule } from '@angular/router';
import { RegisterInfoComponent } from './register-info/register-info.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterTopPageComponent,
    RegisterInfoComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RegisterRoutingModule,
    FormsModule,
  ]
})
export class RegisterModule { }
