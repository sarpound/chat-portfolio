import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IworkProject {
  name: string;
  companyName: string;
  description: string;
  techStack?: string[];
  projectImage: string;
}

@Component({
  selector: 'work-project',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './work-project.component.html',
  styleUrl: './work-project.component.less'
})

export class WorkProjectComponent {
  workHistory: IworkProject[] = [
    {
      name: 'FXForwards Calculator',
      companyName: 'LSEG',
      description: 'FXForwards is a contractual agreement between the client and the bank, or a non-bank provider, to exchange a pair of currencies at a set rate on a future date.',
      techStack: ['Angular 8', 'RxJs'],
      projectImage: ''
    },
    {
      name: 'MUNI',
      companyName: 'LSEG',
      description: '',
      techStack: [],
      projectImage: ''
    }
  ];
}
