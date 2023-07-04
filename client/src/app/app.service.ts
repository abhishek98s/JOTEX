import { Injectable } from '@angular/core';
import { Job } from './Model/category';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  jobs: Job[] = [
    {
      title: "Web Developer",
      type: "Full TIme",
      experience: "1-2",
      salary: "negotiable",
      logo: "assets/image/cube-tech.png",
      company: " Cube Tech Pvt ltd",
      location: "Palmer, Texas",
    },
    {
      title: "Accountant",
      type: "Part TIme",
      experience: "0-1",
      salary: "20k-30k",
      logo: "assets/image/pixels.png",
      company: "Pixels Pvt ltd",
      location: "Kenly, Califoria",
    },
    {
      title: "Sales Executive",
      type: "Full TIme",
      experience: "2-3",
      salary: "30k-40k",
      logo: "assets/image/exetech.png",
      company: "Exe Tech Tech Pvt ltd",
      location: "Milton, WL",
    },
    {
      title: "Marketing",
      type: "Full TIme",
      experience: "0-1",
      salary: "20k-30k",
      logo: "assets/image/avast.png",
      company: "Avast Pvt ltd",
      location: "Strensall, UK",
    }
  ];

  constructor(private http: HttpClient, private router: Router) { }

  getJobs() {
    return this.jobs;
  }

  login() {
    let body = {
      email: "abhishek@gmail.com",
      password: "Abhi123!"
    }

    this.http.post<any>('https://sialo-backend.vercel.app/api/posts', body).subscribe(data => {
      console.log(data)
      return data
    })
  }

  register(body: any) {
    delete body.confPassword;
    let url = 'http://localhost:5000/api/v1/auth/register';
    this.http.post(url, body).subscribe(data => {
      this.router.navigate(['/login']);
    })

  }
}
