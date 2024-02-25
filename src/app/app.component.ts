import { Component, HostListener } from '@angular/core';
import { ModelService } from './services/model.service';

import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  private PROTRAIT_SCREEN = 768;

  constructor(
    private analytics: AngularFireAnalytics,
    private modelServices: ModelService
  ) {
    this.analytics.logEvent('app_open', {"component": "AppComponent"});
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.isShowChatPanel();
  }

  ngOnInit(): void {
    this.isShowChatPanel();
  }

  private isShowChatPanel(): void {
    const isPortraitView = window.innerWidth <= this.PROTRAIT_SCREEN;

    this.modelServices.updateModel({ isPortraitView: isPortraitView });
  }
}
