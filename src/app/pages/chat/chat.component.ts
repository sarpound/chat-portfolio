import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppModel } from 'src/app/interfaces/app.interface';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  isPortraitView: boolean = false;
  isChatPanelSelect: boolean = false;

  private appModel$!: Observable<AppModel>;

  constructor(
    private modelServices: ModelService
  ) {
    this.appModel$ = this.modelServices.getModel();
  }

  ngOnInit(): void {
    this.appModel$.subscribe((models: AppModel) => {
      this.isChatPanelSelect = models.isChatPanelSelect;
      this.isPortraitView = models.isPortraitView;
    });
  }
}
