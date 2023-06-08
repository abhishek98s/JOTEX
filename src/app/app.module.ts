import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeroComponent } from './Modules/Home/hero/hero.component';
import { TopPageComponent } from './Modules/Home/top-page/top-page.component';
import { DiscoverComponent } from './Modules/Home/discover/discover.component';
import { CategoryComponent } from './Modules/Home/category/category.component';
import { FindJobsComponent } from './Modules/Home/find-jobs/find-jobs.component';
import { AlertComponent } from './Modules/Home/alert/alert.component';
import { FeaturedCompanyComponent } from './Modules/Home/featured-company/featured-company.component';
import { TestimonialsComponent } from './Modules/Home/testimonials/testimonials.component';
import { TestimonialComponent } from './Modules/Home/testimonial/testimonial.component';

import { CareersAdviceComponent } from './Modules/Home/careers-advice/careers-advice.component';
import { FooterComponent } from './Modules/Home/footer/footer.component';
import { JobsModule } from './Modules/jobs/jobs.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TopPageComponent,
    DiscoverComponent,
    CategoryComponent,
    FindJobsComponent,
    AlertComponent,
    FeaturedCompanyComponent,
    TestimonialsComponent,
    TestimonialComponent,
    CareersAdviceComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JobsModule,
    SharedModule,
    CommonModule,
    RouterModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
