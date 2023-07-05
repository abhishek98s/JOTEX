import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoggedIn = this.auth.isLoggedIn();
  showNav: Boolean = false;

  constructor(public auth: ApiServicesService) { }

  logOut() {
    this.auth.logout();
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }

}
