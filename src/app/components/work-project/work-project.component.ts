import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IworkProject {
  name: string;
  companyName: string;
  description: string;
  techStack?: string[];
  imageUrl: string;
  loading: boolean;
}

@Component({
  selector: 'work-project',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './work-project.component.html',
  styleUrl: './work-project.component.less'
})

export class WorkProjectComponent {
  workProjects: IworkProject[] = [
    {
      name: 'FXForwards Calculator',
      companyName: 'LSEG',
      description: 'FXForward is a platform in Refinitiv that are derivative contracts that allow participants to exchange currencies at a predetermined rate on a future date, used for hedging or speculating on currency movements.',
      techStack: ['Angular 8', 'RxJs'],
      imageUrl: '/assets/images/fxforwards_project_icon.png', //ไม่โอเคร
      loading: true
    },
    {
      name: 'Particle App Proxy',
      companyName: 'LSEG',
      description: 'Particle app proxy is a server-side application platform built with Node.js and Express.js. It utilizes service workers to create a localhost environment on a real domain, acting as a proxy for the application. This approach resolves Cross-Origin Resource Sharing (CORS) issues that developers in my department often encounter when connecting to real API domains from localhost. Additionally, it can intercept requests from the backend, substituting mockup data JSON when a registered request matches, thus facilitating smooth testing and development processes.',
      techStack: ['Angular 15', 'RxJs', 'Node Js', 'Express Js', 'Service Worker'],
      imageUrl: '/assets/images/particle_app_proxy.png', //ไม่โอเคร
      loading: true
    }
  ];
}
