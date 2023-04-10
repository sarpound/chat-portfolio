import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { getCurrentDate } from 'src/app/shared/utils/date';

@Component({
  selector: 'message-chat',
  templateUrl: './message-chat.component.html',
  styleUrls: ['./message-chat.component.less']
})
export class MessageChatComponent implements OnInit{

  @ViewChild('newMessage') newMessage!: ElementRef;

  today: string = 'N/A'

  ngOnInit(): void {
    this.today = getCurrentDate();
  }

  onSendButtonClick(): void {
    const newMessage = this.newMessage.nativeElement.innerHTML.trim();
    if (newMessage !== '') {
      this.newMessage.nativeElement.innerHTML = '';
      const messagePanel = document.querySelector('.message-panel');
      if (messagePanel) {
        const ngContent = messagePanel.attributes[0] ? messagePanel.attributes[0].name : '';
        const messageBox = document.createElement('div');
        messageBox.classList.add('message-box');
        messageBox.setAttribute(ngContent, '');
        messageBox.setAttribute('name', 'sender');
        messageBox.innerHTML = `<p ${ngContent} class="sender">${newMessage}</p>`;
        messagePanel.append(messageBox);
      }
    }
  }

}
