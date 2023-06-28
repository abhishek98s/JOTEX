import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsHeroComponent } from './jobs-hero/jobs-hero.component';
import { JobsTopPageComponent } from './jobs-top-page/jobs-top-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterComponent } from './filter/filter.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    JobsTopPageComponent,
    JobsHeroComponent,
    FilterComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    JobsRoutingModule,
    SharedModule
  ],
})
export class JobsModule { }
