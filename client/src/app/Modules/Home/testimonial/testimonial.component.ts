import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/Model/category';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

  @Input() person!: Testimonial;

}
