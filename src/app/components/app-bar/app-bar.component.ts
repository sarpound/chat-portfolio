import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.less']
})
export class AppBarComponent {

  constructor(private router: Router) {}

  isActive(route: string) {
    return this.router.isActive(route, true);
  }
}
