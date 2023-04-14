import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppModel } from 'src/app/interfaces/app.interface';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent implements OnInit {

  isPortraitView: boolean = false;
  isChatPanelSelect: boolean = false;

  private appModel$!: Observable<AppModel>;

  constructor(
    private modelServices: ModelService,
    private router: Router
  ) {
    this.appModel$ = this.modelServices.getModel();
  }

  ngOnInit(): void {
    this.appModel$.subscribe((models: AppModel) => {
      this.isPortraitView = models.isPortraitView;
      this.isChatPanelSelect = models.isChatPanelSelect;
    })
  }

  onBackClick(): void {
    this.modelServices.updateModel({ isChatPanelSelect: false });
  }

  get isChatRoute(): boolean {
    return this.router.url === '/';
  }
}
