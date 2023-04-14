import {
  AfterViewInit,
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { IMessage } from 'src/app/interfaces/message-chat';
import { ModelService } from 'src/app/services/model.service';
import { getCurrentDate, getCurrentTime } from 'src/app/shared/utils/date.util';

@Component({
  selector: 'message-chat',
  templateUrl: './message-chat.component.html',
  styleUrls: ['./message-chat.component.less'],
})
export class MessageChatComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('newMessage') newMessage!: ElementRef;

  today: string = 'N/A';
  textMessage: string = '';

  private messageHistory: IMessage[] = [];
  private greetingMessage: IMessage[] = [
    {
      userId: 'receiver',
      message: 'Hello, my name is Soravit Varanich',
    },
    {
      userId: 'receiver',
      message:
        "Welcome to my portfolio chatbot! I'm here to help you learn more about my skills, experience, and hobbies, and I'd be happy to answer any questions you have. To get started, here are some recommended questions that you can choose from:",
    },
    {
      userId: 'receiver',
      message:
        "1. Can you tell me more about your experience working in the tech industry?<br>2. What programming languages and frameworks are you most skilled in?<br>3. Can you provide examples of projects you've worked on in the past?<br>4. How do you approach problem-solving and troubleshooting in your work?",
    }
  ];
  private TEXT_DELAY: number = 1200;
  private userInterract: boolean = false;
  private greetingMsgDelay: any;

  constructor(
    private modelService: ModelService
  ) {}

  ngOnInit(): void {
    this.today = getCurrentDate();

    document.addEventListener('click', this.handleClick);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.handleClick);
    clearTimeout(this.greetingMsgDelay);
  }

  ngAfterViewInit(): void {
    this.today = getCurrentDate();
    this.greetingMsgDelay = setTimeout(() => {
      this.displayMessages(this.greetingMessage, 0);
    }, this.TEXT_DELAY / 2);
  }

  onNewMessageKeyDown(): void {
    this.textMessage = this.newMessage.nativeElement.innerHTML;
  }

  onSendButtonClick(textMessage?: string): void {
    const newMessage = textMessage || this.newMessage.nativeElement.innerHTML.trim();
    const sanitizedText = newMessage.replace(/<div>/g, '').replace(/<\/div>/g, '').replace(/&nbsp;/g, '');
    if (sanitizedText !== '') {
      this.messageHistory.push({
        userId: 'sender',
        message: sanitizedText,
      });
      this.newMessage.nativeElement.innerHTML = '';
      const messagePanel = document.querySelector('.message-panel');
      if (messagePanel) {
        const ngContent = messagePanel.attributes[0] ? messagePanel.attributes[0].name : '';
        const messageBox = document.createElement('div');
        messageBox.classList.add('message-box');
        messageBox.setAttribute(ngContent, '');
        messageBox.innerHTML = `<p ${ngContent} class="sender">${sanitizedText}</p>`;

        // Play sound effect
        const soundSending = new Audio('../../../assets/audios/sender.mp3');
        soundSending.play();
        messagePanel.append(messageBox);

        this.modelService.updateModel({ currentMessage: { userId: 'sender', message: sanitizedText.length > 26 ? sanitizedText.slice(0, 25).replace(/<br>/g, '') + '...' : sanitizedText.replace(/<br>/g, ''), time: this.getCurrentTime } });

        // Scroll to the new message element
        const messageBoxes = document.querySelectorAll('.sender');
        const lastMessage = messageBoxes[messageBoxes.length - 1];
        lastMessage.scrollIntoView({ behavior: 'smooth' });

        this.newMessage.nativeElement.focus();
      }
    }
  }

  private appendReceiverMessage(message: IMessage): void {
    const messagePanel = document.querySelector('.message-panel');
    if (!messagePanel) {
      return;
    }

    const ngContent = messagePanel.attributes[0]?.name || '';
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.setAttribute(ngContent, '');

    const isSenderMessage = this.messageHistory[this.messageHistory.length - 1]?.userId === 'sender' || this.messageHistory.length === 0;
    if (isSenderMessage) {
      const receiverInfoElement = this.createReceiverInfoElement(ngContent);
      messageBox.appendChild(receiverInfoElement);
    }

    this.messageHistory.push(message);
    const loadingElement = this.createLoadingElement(ngContent);
    messageBox.appendChild(loadingElement);
    messagePanel.append(messageBox);

    this.greetingMsgDelay = setTimeout(() => {
      messageBox.removeChild(loadingElement);

      const receiverText = document.createElement('p');
      receiverText.classList.add('receiver');
      receiverText.setAttribute(ngContent, '');
      receiverText.innerHTML = message.message;

      // Play sound effect
      // Cannot find the way to play a music even user not interract with DOM
      if (this.userInterract) {
          const soundReceiving = new Audio('../../../assets/audios/receiver.mp3');
          soundReceiving.play();
      }

      messageBox.appendChild(receiverText);
      const displayedMessage = message.message.length > 31 ? message.message.slice(0, 30) + '...' : message.message;
      this.modelService.updateModel({ currentMessage: { userId: 'receiver', message: displayedMessage, time: this.getCurrentTime } });
    }, this.TEXT_DELAY / 2);
  }

  private createLoadingElement(ngContent: string): HTMLDivElement {
    const div = document.createElement('div');
    div.className = 'loading';
    div.setAttribute(ngContent, '');
    div.innerHTML = `<div ${ngContent} class="loading-text"><span ${ngContent} class="dot">.</span><span ${ngContent} class="dot">.</span><span ${ngContent} class="dot">.</span></div>`;
    return div;
  }

  private createReceiverInfoElement(ngContent: string): HTMLDivElement {
    // Create the parent element
    const chatGridContainer = document.createElement('div');
    chatGridContainer.className = 'chat-grid-container';
    chatGridContainer.setAttribute(ngContent, '');

    // Create the first child element
    const chatGridItem1 = document.createElement('div');
    chatGridItem1.className = 'chat-grid-item';
    chatGridItem1.setAttribute(ngContent, '');

    // Create the nested image element
    const chatImageItem = document.createElement('div');
    chatImageItem.className = 'chat-image-item';
    const img = document.createElement('img');
    img.src = '../../../assets/images/profile_img.jpg';
    img.alt = 'profile_img';
    img.setAttribute(ngContent, '');
    chatImageItem.appendChild(img);
    chatImageItem.setAttribute(ngContent, '');

    // Add the nested image element to the first child element
    chatGridItem1.appendChild(chatImageItem);

    // Create the second child element
    const chatGridItem2 = document.createElement('div');
    chatGridItem2.className = 'chat-grid-item';
    chatGridItem2.setAttribute(ngContent, '');

    // Create the nested span element
    const chatInfoItem = document.createElement('div');
    chatInfoItem.setAttribute(ngContent, '');
    chatInfoItem.className = 'chat-info-item';
    const span = document.createElement('span');
    span.setAttribute(ngContent, '');
    span.className = 'chat-name';
    span.textContent = 'Soravit Varanich';
    chatInfoItem.appendChild(span);

    // Add the nested span element to the second child element
    chatGridItem2.appendChild(chatInfoItem);

    // Create the third child element
    const chatGridItem3 = document.createElement('div');
    chatGridItem3.setAttribute(ngContent, '');
    chatGridItem3.className = 'chat-grid-item';

    // Create the nested span element
    const spanDate = document.createElement('span');
    spanDate.setAttribute(ngContent, '');
    spanDate.className = 'chat-date';
    spanDate.textContent = this.getCurrentTime;

    // Add the nested span element to the third child element
    chatGridItem3.appendChild(spanDate);

    // Add all child elements to the parent element
    chatGridContainer.appendChild(chatGridItem1);
    chatGridContainer.appendChild(chatGridItem2);
    chatGridContainer.appendChild(chatGridItem3);

    return chatGridContainer;
  }

  private displayMessages(messages: IMessage[], index: number): void {
    if (index < messages.length) {
      const message = messages[index];
      this.appendReceiverMessage(message);
      this.greetingMsgDelay = setTimeout(() => {
        this.displayMessages(messages, index + 1);
      }, this.TEXT_DELAY);
    }
  }

  private get getCurrentTime(): string {
    return getCurrentTime();
  }

  private handleClick = (): void => {
    this.userInterract = true;
  };
}
