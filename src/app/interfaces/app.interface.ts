import { IMessage } from "./message-chat";

export interface AppModel {
  currentMessage: IMessage;
  isPortraitView: boolean;
  isChatPanelSelect:  boolean;
  messageHistory?: IMessage[];
}
