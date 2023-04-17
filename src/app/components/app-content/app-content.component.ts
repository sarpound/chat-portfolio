import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AppModel } from 'src/app/interfaces/app.interface';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.less']
})
export class AppContentComponent {
  @ViewChild('appContent') appContent!: ElementRef;

  isPortraitView!: boolean;
  private appModel$!: Observable<AppModel>;

  constructor(
    private modelServices: ModelService,
    private cdr: ChangeDetectorRef
  ) {
    this.appModel$ = this.modelServices.getModel();
  }

  ngOnInit(): void {
    this.appModel$.subscribe((models: AppModel) => {
      this.isPortraitView = models.isPortraitView;
      this.updateIsPortraitView();
    });
  }

  private updateIsPortraitView() {
    // update your value here
    this.cdr.detectChanges();
  }
}
