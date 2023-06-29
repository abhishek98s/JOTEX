import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotfoundTopPageComponent } from './notfound-top-page/notfound-top-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NotfoundTopPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
