import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppModel } from 'src/app/interfaces/app.interface';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent implements OnInit {
  public isPortraitView: boolean = false;

  private appModel$!: Observable<AppModel>;
  private appModelSubscription!: Subscription;

  constructor(
    private modelServices: ModelService
  ) {
    this.appModel$ = this.modelServices.getModel();
  }

  ngOnInit(): void {
    this.appModelSubscription = this.appModel$.subscribe((models: AppModel) => {
      this.isPortraitView = models.isPortraitView;
    });
  }

  ngOnDestroy(): void {
    if (this.appModelSubscription) {
      this.appModelSubscription.unsubscribe();
    }
  }

  public openLink(link: string) {
    window.open(link, '_blank');
  }
}
