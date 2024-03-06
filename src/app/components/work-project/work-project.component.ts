import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WORK_PROJECTS } from 'src/app/constants/works';
import { IworkProject } from 'src/app/interfaces/works.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'work-project',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './work-project.component.html',
  styleUrl: './work-project.component.less'
})

export class WorkProjectComponent {
  workProjects: IworkProject[] = WORK_PROJECTS;

  constructor(private router: Router) { }

  navigateToRouteWithParams(routeName: string) {
    this.router.navigate(['/work'], { queryParams: { projects: routeName } });
  }
}
