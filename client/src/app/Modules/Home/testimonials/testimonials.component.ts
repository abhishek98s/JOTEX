import { Component } from '@angular/core';
import { Testimonial } from 'src/app/Model/category';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      photo: "assets/image/testimonial2.jpeg",
      title: "Jiyoung Kwak",
      description: "\“Finding my dream job was made possible through this amazing job portal. The platform provided me with numerous opportunities, and I landed my dream job within weeks of signing up.\”"
    },
    {
      photo: "assets/image/testimonial1.jpeg",
      title: "John Smith",
      description: "\“Finding my dream job was made possible through this amazing job portal. The platform provided me with numerous opportunities, and I landed my dream job within weeks of signing up.\”"
    },
    {
      photo: "assets/image/testimonial3.jpeg",
      title: "Sarah Thompson Kwak",
      description: "\"I can't thank this job portal enough for helping me transition into a new industry. As a career changer, I was unsure about finding relevant job opportunities.\""
    },
    {
      photo: "assets/image/testimonial2.jpeg",
      title: "John Smith",
      description: "\“Finding my dream job was made possible through this amazing job portal. The platform provided me with numerous opportunities, and I landed my dream job within weeks of signing up.\”"
    },
    {
      photo: "assets/image/testimonial1.jpeg",
      title: "Sarah Thompson Kwak",
      description: "\"I can't thank this job portal enough for helping me transition into a new industry. As a career changer, I was unsure about finding relevant job opportunities.\""
    }
  ]
  carouselConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '80px',
    variableWidth: true,

   
  };

}
