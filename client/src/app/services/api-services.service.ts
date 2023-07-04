import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  private apiUrl = 'http://localhost:5000/api/v1/auth/login'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  login(data: any) {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.apiUrl}`, data)
  }

  register(body: any) {
    delete body.confPassword;
    let url = 'http://localhost:5000/api/v1/auth/register';
    return this.http.post(url, body);
  }
}
