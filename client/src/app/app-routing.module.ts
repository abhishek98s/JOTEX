import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './Modules/Home/hero/hero.component';
import { TopPageComponent } from './Modules/Home/top-page/top-page.component';
import { JobsTopPageComponent } from './Modules/jobs/jobs-top-page/jobs-top-page.component';
import { NotfoundTopPageComponent } from './Modules/not-found/notfound-top-page/notfound-top-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'top', component: TopPageComponent },
  { path: 'jobs', loadChildren: () => import('./Modules/jobs/jobs-routing.module').then(m => m.JobsRoutingModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./Modules/login/login-routing.module').then(m => m.LoginRoutingModule) },
  { path: 'register', loadChildren: () => import('./Modules/register/register-routing.module').then(m => m.RegisterRoutingModule) },
  { path: '404', component: NotfoundTopPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
