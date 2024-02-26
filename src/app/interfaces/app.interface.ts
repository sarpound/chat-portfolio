import { IMessage } from "./message-chat.interface";

export interface AppModel {
  currentMessage: IMessage;
  isPortraitView: boolean;
  isChatPanelSelect:  boolean;
  messageHistory?: IMessage[];
}
