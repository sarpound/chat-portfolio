import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./work.component.less']
})

export class WorkComponent implements OnInit {

  workHistory: Iwork[] = [
    {
      name: 'Adecco Thailand',
      shortName: 'Adecco',
      description: 'Adecco Thailand: Pioneering Recruitment and Employment Services for Dynamic Workforce Solutions.',
      position: 'Web Developer (Internship)',
      date: '1 June 2020 - 31 July 2020',
      logoUrl: '/assets/images/Adecco_logo.png',
      coverUrl: '/assets/images/Adecco_work_cover.png',
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
  selectedWork: any;

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
