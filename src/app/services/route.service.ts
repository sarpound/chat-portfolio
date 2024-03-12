import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) {}

  isActive(route: string) {
    const routeWithoutParam = this.router.url.includes('?') ? this.router.url.split('?')[0] : this.router.url;
    const isRouteActive = routeWithoutParam === route;

    return isRouteActive;
  }
}
