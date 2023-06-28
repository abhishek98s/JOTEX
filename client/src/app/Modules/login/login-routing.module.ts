import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginTopPageComponent } from './login-top-page/login-top-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'top', component: LoginTopPageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
