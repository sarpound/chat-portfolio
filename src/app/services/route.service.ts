import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) {}

  isActive(route: string) {
    return this.router.isActive(route, true);
  }
}
