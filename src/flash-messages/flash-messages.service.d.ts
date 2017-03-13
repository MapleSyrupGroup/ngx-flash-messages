import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export declare interface IFlashMessageOptions {
  classes?: string[];
  timeout?: number;
}

export interface IFlashMessage {
  text: string;
  options?: IFlashMessageOptions;
  timestamp?: number;
}

export declare class FlashMessagesService {
  public message: Subject<IFlashMessage>;
  show(text: string, options: IFlashMessageOptions): void;
}
