import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Observable, Subscription } from 'rxjs';
import { AppModel } from 'src/app/interfaces/app.interface';
import { ModelService } from 'src/app/services/model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent implements OnInit {
  public isPortraitView: boolean = false;

  private appModel$!: Observable<AppModel>;
  private appModelSubscription!: Subscription;

  constructor(
    private modelServices: ModelService,
    private router: Router
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

  public openLink(link: string, params?: any) {
    if (link.endsWith('.pdf') || link.startsWith('http') || link.startsWith('mailto:')) {
      window.open(link, '_blank');
    } else {
      if (params) {
        this.router.navigate([link], { queryParams: params });
      } else {
        this.router.navigate([link]);
      }
    }
  }
}
