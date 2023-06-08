import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsTopPageComponent } from './jobs-top-page/jobs-top-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'top', component: JobsTopPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
