import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface Iwork {
  name: string;
  shortName: string;
  description: string;
  position: string;
  date: string;
  logoUrl: string;
  coverUrl: string;
  iconUrl: string;
  selected: boolean;
}
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less'],
  animations: [
    trigger('fade', [
      // Define states for 'show' and 'hide'
      state('in', style({ opacity: 1 })),
      // Transition from any state to any state
      transition('* => *', [
        // Fade-out effect
        style({ opacity: 0 }),
        animate('0.5s ease-in')
      ]),
    ])
  ]
})

export class WorkComponent implements OnInit {

  workHistory: Iwork[] = [
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

  selectedWork: Iwork = {
    name: 'N/A',
    shortName: 'N/A',
    description: 'N/A',
    position: 'N/A',
    date: 'N/A',
    logoUrl: 'N/A',
    coverUrl: 'N/A',
    iconUrl: 'N/A',
    selected: false,
  };

  ngOnInit() {
    this.sortByDefault(this.workHistory);
    this.selectedWork = this.workHistory.find(work => work.selected) || this.workHistory[0];
  }

  sortByDefault(items: any[]) {
    items.sort((a, b) => {
      // Items with `default: true` come first
      if (a.selected === true && b.selected !== true) {
        return -1;
      }
      if (a.selected !== true && b.selected === true) {
        return 1;
      }
      // If all items have the same `default` status, they remain in their original order (stable sort)
      return 0;
    });
  }

  selectWork(work: Iwork) {
    this.selectedWork = work;
  }
}
