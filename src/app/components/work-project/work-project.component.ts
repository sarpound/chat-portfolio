import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WORK_PROJECTS } from 'src/app/constants/works';
import { IworkProject } from 'src/app/interfaces/works.interface';

@Component({
  selector: 'work-project',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './work-project.component.html',
  styleUrl: './work-project.component.less'
})

export class WorkProjectComponent {
  workProjects: IworkProject[] = WORK_PROJECTS;
}
