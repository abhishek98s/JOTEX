import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';

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
import { JobsModule } from './Modules/jobs/jobs.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginModule } from './Modules/login/login.module';
import { RegisterModule } from './Modules/register/register.module';
import { NotFoundModule } from './Modules/not-found/not-found.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

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
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    JobsModule,
    LoginModule,
    NotFoundModule,
    RegisterModule,
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    SlickCarouselModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
