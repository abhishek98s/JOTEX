import { Component } from '@angular/core';

@Component({
  selector: 'app-careers-advice',
  templateUrl: './careers-advice.component.html',
  styleUrls: ['./careers-advice.component.scss']
})
export class CareersAdviceComponent {

  advices = [
    {
      img: "assets/image/advice1.webp",
      title: "Best Careers",
      description: "Explore our comprehensive career guides designed to help you navigate various industries, job roles, and career paths. Gain insights into the skills, qualifications, and experience required for different careers."
    },
    {
      img: "assets/image/advice2.jpg",
      title: "Resume Writing",
      description: "Craft a standout resume with our expert tips and guidelines. Discover the best practices for resume formatting, content structure, and showcasing your skills and accomplishments effectively."
    },
    {
      img: "assets/image/advice3.jpg",
      title: "Cover Letter Tips",
      description: "Explore our comprehensive career guides designed to help you navigate various industries, job roles, and career paths. Gain insights into the skills, qualifications, and experience required for different careers."
    },
    {
      img: "assets/image/intev.jpg",
      title: "Interview Preparation",
      description: "Prepare for interviews with confidence using our interview tips and techniques. Learn how to research companies, anticipate common interview questions, and formulate impactful responses."
    }
  ]

}
