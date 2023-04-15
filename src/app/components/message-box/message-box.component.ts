import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/interfaces/message-chat';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.less']
})
export class MessageBoxComponent {
  currentMessage: string = '';
  currentMsgTime: string = '';
  isChatPanelSelect: boolean = false;

  private currentMessage$: Observable<IMessage>;

  constructor(
    private modelService: ModelService
  ) {
    this.currentMessage$ = this.modelService.getCurrentMessage();
  }

  ngOnInit(): void {
    this.currentMessage$.subscribe((model: IMessage) => {
      this.currentMessage = model.message.length > 50 ? model.message.slice(0, 49) + '...' : model.message;
      this.currentMsgTime = model.time || '';
    });
  }

  onChatSelect(): void {
    this.isChatPanelSelect = !this.isChatPanelSelect;
    this.modelService.updateModel({ isChatPanelSelect: this.isChatPanelSelect })
  }
}
