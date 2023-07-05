import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServicesService } from './api-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: ApiServicesService, private router: Router) { }

  canActivate(): boolean {

    let data: any = localStorage.getItem("login")
    let parseData = JSON.parse(data)
    console.log(parseData)

    if (parseData.user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
