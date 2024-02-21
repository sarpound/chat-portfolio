import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Renderer2, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { ModelService } from 'src/app/services/model.service';
import { Observable, Subscription } from 'rxjs';
import { AppModel } from 'src/app/interfaces/app.interface';

interface Iwork {
  name: string;
  shortName: string;
  description: string;
  position: string;
  date: string;
  logoUrl: string;
  coverUrl: string;
  coverMobilUrl?: string;
  iconUrl: string;
  selected: boolean;
}

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.less',
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s ease-in')
      ]),
    ])
  ],
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ CommonModule ]
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
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
      coverMobilUrl: '/assets/images/lseg_work_cover_mobil.png',
      iconUrl: '/assets/images/lseg_icon.jpg',
      selected: true
    }
  ];

  @ViewChildren('mainContainerImages') mainContainerImages!: QueryList<ElementRef>;
  @ViewChildren('coverDetails') coverDetails!: QueryList<ElementRef>;
  @ViewChildren('coverIntros') coverIntros!: QueryList<ElementRef>;
  @ViewChildren('descriptPosition') descriptPositions!: QueryList<ElementRef>;
  @ViewChildren('descriptDate') descriptDates!: QueryList<ElementRef>;

  private ZERO = 0;
  private ONE = 1;
  private MINUS_ONE = -1;
  private DELAY_LOAD_DOM = 0;
  private appModel$!: Observable<AppModel>;
  private appModelSubscription!: Subscription;

  public isPortraitView!: boolean;
  public mainContainerImageWidth: number = this.ZERO;
  public selectedWork: Iwork = {
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

  constructor(
    private cdr: ChangeDetectorRef,
    private modelServices: ModelService,
    private renderer: Renderer2
    ) {
      this.appModel$ = this.modelServices.getModel();
    }

  ngOnInit(): void {
    this.appModelSubscription =this.appModel$.subscribe((models: AppModel) => {
      this.isPortraitView = models.isPortraitView;

      if (this.isPortraitView) {
        this.cdr.detectChanges();
        this.updateCoverWorkDetailWidth();
      }
    });

    this.sortByDefault(this.workHistory);
    this.selectedWork = this.workHistory.find(work => work.selected) || this.workHistory[0];
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.updateCoverWorkDetailWidth();
  }

  ngOnDestroy(): void {
    if (this.appModelSubscription) {
      this.appModelSubscription.unsubscribe();
    }
  }

  updateCoverWorkDetailWidth(): void {
    const delayUpdateDOM = setTimeout(() => {
      if (this.isPortraitView) {

        this.mainContainerImages.forEach((elementRef: ElementRef) => {
          const mainContainerImageWidth = elementRef.nativeElement.offsetWidth;
          const coverDetails = elementRef.nativeElement.querySelector('.cover-details');
          const coverIntro = elementRef.nativeElement.querySelector('.cover-details-intro');
          const descriptPosition = elementRef.nativeElement.querySelector('.descriptPosition');
          const descriptDate = elementRef.nativeElement.querySelector('.descriptDate');

          if (coverDetails) {
            this.renderer.setStyle(coverDetails, 'width', `${mainContainerImageWidth}px`);
            this.renderer.setStyle(coverDetails, 'padding', '0px');
          }
          if (coverIntro) {
            this.renderer.setStyle(coverIntro, 'padding', '0 15px');
          }
          if (descriptPosition) {
            this.renderer.setStyle(descriptPosition, 'padding', '0 15px');
          }
          if (descriptDate) {
            this.renderer.setStyle(descriptDate, 'padding', '0 15px');
          }
        });
      }

      clearTimeout(delayUpdateDOM);
    }, this.DELAY_LOAD_DOM);
  }

  sortByDefault(items: any[]) {
    items.sort((a, b) => {
      // Items with `default: true` come first
      if (a.selected === true && b.selected !== true) {
        return this.MINUS_ONE;
      }
      if (a.selected !== true && b.selected === true) {
        return this.ONE;
      }
      // If all items have the same `default` status, they remain in their original order (stable sort)
      return this.ZERO;
    });
  }

  selectWork(work: Iwork): void {
    this.selectedWork = work;
  }
}
