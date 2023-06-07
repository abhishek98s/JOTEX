import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { ListedJobComponent } from './listed-job/listed-job.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TitleComponent,
    ListedJobComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    TitleComponent,
    ListedJobComponent
  ]
})
export class SharedModule { }
