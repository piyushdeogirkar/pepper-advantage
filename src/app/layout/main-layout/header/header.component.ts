import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isToggled: boolean = false;

  constructor(
    private router: Router
  ) {

  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
