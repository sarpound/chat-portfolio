import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IMessage } from 'src/app/interfaces/message-chat';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.less']
})
export class MessageBoxComponent implements OnInit, OnDestroy {
  currentMessage = '';
  currentMsgTime = '';
  isChatPanelSelect = false;

  private appModelSubscription!: Subscription;
  private currentMessage$!: Observable<IMessage>;

  constructor(private modelService: ModelService) {}

  ngOnInit(): void {
    this.currentMessage$ = this.modelService.getCurrentMessage();
    this.appModelSubscription = this.currentMessage$.subscribe(({ message, time }) => {
      this.currentMessage = this.truncateMessage(message);
      this.currentMsgTime = time || '';
    });
  }

  ngOnDestroy(): void {
    if (this.appModelSubscription) {
      this.appModelSubscription.unsubscribe();
    }
  }

  toggleChatPanel(): void {
    this.isChatPanelSelect = !this.isChatPanelSelect;
    this.modelService.updateModel({ isChatPanelSelect: this.isChatPanelSelect });
  }

  private truncateMessage(message: string): string {
    const maxLength = window.innerWidth > 1200 ? 36 : 30;
    return message.length > maxLength ? message.slice(0, maxLength - 1) + '...' : message;
  }
}
