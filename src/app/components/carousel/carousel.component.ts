import { Component, ElementRef, ViewChildren, QueryList, CUSTOM_ELEMENTS_SCHEMA, Renderer2, ChangeDetectorRef, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { ModelService } from 'src/app/services/model.service';
import { Observable, Subscription } from 'rxjs';
import { AppModel } from 'src/app/interfaces/app.interface';
import { Iwork } from 'src/app/interfaces/works.interface';
import { WORKS } from 'src/app/constants/works';

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
  workHistory: Iwork[] = WORKS;

  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChildren('mainContainerImages') mainContainerImages!: QueryList<ElementRef>;
  @ViewChildren('coverDetails') coverDetails!: QueryList<ElementRef>;
  @ViewChildren('coverIntros') coverIntros!: QueryList<ElementRef>;
  @ViewChildren('descriptPosition') descriptPositions!: QueryList<ElementRef>;
  @ViewChildren('descriptDate') descriptDates!: QueryList<ElementRef>;

  private ALL_SAME_POSITION = 0;
  private CHANGE_TO_FIRST = 1;
  private NOT_CHANGE = -1;
  private DELAY_LOAD_DOM = 0;
  private MINIMUN_SCREEN_WIDTH = 360;
  private appModel$!: Observable<AppModel>;
  private appModelSubscription!: Subscription;

  public isPortraitView!: boolean;
  public mainContainerImageWidth: number = window.screen.width;
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
        this.updateCoverWorkDetailWidth();
      }
    });

    this.sortByDefault(this.workHistory);
    this.selectedWork = this.workHistory.find(work => work.selected) || this.workHistory[0];
  }

  ngAfterViewInit(): void {
    this.updateCoverWorkDetailWidth();
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.appModelSubscription) {
      this.appModelSubscription.unsubscribe();
    }
  }

  updateCoverWorkDetailWidth(): void {
    const delayUpdateDOM = setTimeout(() => {
      if (this.isPortraitView) {
        const carouselWidth = this.carousel.nativeElement.offsetWidth || this.MINIMUN_SCREEN_WIDTH;

        this.mainContainerImages.forEach((elementRef: ElementRef) => {
          const mainContainerImageWidth = carouselWidth;
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
    items.sort((first, sencond) => {
      // Items with `default: true` come first
      if (first.selected === true && sencond.selected !== true) {
        return this.NOT_CHANGE;
      }
      if (first.selected !== true && sencond.selected === true) {
        return this.CHANGE_TO_FIRST;
      }
      // If all items have the same `default` status, they remain in their original order (stable sort)
      return this.ALL_SAME_POSITION;
    });
  }

  selectWork(work: Iwork): void {
    this.selectedWork = work;
  }
}
