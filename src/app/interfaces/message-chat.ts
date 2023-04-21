export interface IMessage {
  userId?: string;
  message: string;
  time?: string;
}

export type Indent = {
  [key: string]: {
    key: string;
    indent: string[];
    response: string[];
  };
};
