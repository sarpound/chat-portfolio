import { Iwork, IworkProject } from "../interfaces/works.interface";

export const WORKS: Iwork[] = [
  {
    name: 'Adecco Thailand',
    shortName: 'Adecco',
    description: 'Adecco Thailand: Pioneering Recruitment and Employment Services for Dynamic Workforce Solutions.',
    position: 'Web Developer (Internship)',
    date: '1 June 2020 - 31 July 2020',
    logoUrl: '/assets/images/adecco_logo.png',
    coverUrl: '/assets/images/adecco_work_cover.png',
    iconUrl: '/assets/images/adecco_icon.png',
    selected: false,
  },
  {
    name: 'London Stock Group Exchange',
    shortName: 'LSEG',
    description: 'LSEG: Global Leaders in Financial Infrastructure, Fostering Innovation and Economic Growth.',
    position: 'Software Engineer',
    date: '1 Oct 2021 - 30 April 2023',
    logoUrl: '/assets/images/lseg_logo.png',
    coverUrl: '/assets/images/lseg_work_cover.png',
    iconUrl: '/assets/images/lseg_icon.jpg',
    selected: true
  }
];

export const WORK_PROJECTS: IworkProject[] = [
  {
    name: 'FXForwards Calculator',
    routeName: 'fxforwards',
    companyName: 'LSEG',
    description: 'FXForward is a platform in Refinitiv that are derivative contracts that allow participants to exchange currencies at a predetermined rate on a future date, used for hedging or speculating on currency movements.',
    techStack: ['Angular 8', 'RxJs'],
    imageUrl: '/assets/images/fxforwards_project_icon.png',
    loading: true,
    display: true
  },
  {
    name: 'Particle App Proxy',
    routeName: 'particle-app-proxy',
    companyName: 'LSEG',
    description: 'Particle app proxy is a server-side application platform built with Node.js and Express.js. It utilizes service workers to create a localhost environment on a real domain, acting as a proxy for the application. This approach resolves Cross-Origin Resource Sharing (CORS) issues that developers in my department often encounter when connecting to real API domains from localhost. Additionally, it can intercept requests from the backend, substituting mockup data JSON when a registered request matches, thus facilitating smooth testing and development processes.',
    techStack: ['Angular 15', 'RxJs', 'Node Js', 'Express Js', 'Service Worker'],
    imageUrl: '/assets/images/particle_app_proxy.png',
    loading: true,
    display: false
  }
];
