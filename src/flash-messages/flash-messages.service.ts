import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface IFlashMessageOptions {
  classes?: string[];
  timeout?: number;
}

export interface IFlashMessage {
  text: string;
  options?: IFlashMessageOptions;
  timestamp?: number;
}

Injectable();
export class FlashMessagesService {
  public message = new Subject<IFlashMessage>();

  show(text: string, options: IFlashMessageOptions = {}) {
    this.message.next(<IFlashMessage>{
      text,
      options
    });
  }
}
