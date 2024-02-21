import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppModel } from 'src/app/interfaces/app.interface';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.less']
})
export class AppContentComponent implements OnInit, OnDestroy {
  @ViewChild('appContent') appContent!: ElementRef;

  isPortraitView!: boolean;
  private appModel$!: Observable<AppModel>;
  private appModelSubscription!: Subscription;

  constructor(
    private cdr: ChangeDetectorRef,
    private modelServices: ModelService
  ) {
    this.appModel$ = this.modelServices.getModel();
  }

  ngOnInit(): void {
    this.appModel$.subscribe((models: AppModel) => {
      this.isPortraitView = models.isPortraitView;

      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.appModelSubscription) {
      this.appModelSubscription.unsubscribe();
    }
  }
}
