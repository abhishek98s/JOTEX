import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  private isLoggedInValue = false;
  private apiUrl = 'http://localhost:5000/api/v1/auth/login'; // Replace with your API endpoint URL

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn(): boolean {
    return this.isLoggedInValue;
  }

  login(data: any) {
    this.isLoggedInValue = true;
    return this.http.post<any>(`${this.apiUrl}`, data)
  }

  register(body: any) {
    delete body.confPassword;
    let url = 'http://localhost:5000/api/v1/auth/register';
    return this.http.post(url, body);
  }

  logout() {
    this.isLoggedInValue = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
