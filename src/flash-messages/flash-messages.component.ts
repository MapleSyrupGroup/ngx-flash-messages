import { Component, OnInit } from '@angular/core';
import {
  FlashMessagesService,
  IFlashMessage,
  IFlashMessageOptions,
} from './flash-messages.service';

@Component({
  selector: 'ngx-flash-messages',
  templateUrl: './flash-messages.component.html',
})
export class FlashMessagesComponent implements OnInit {
  public messages: IFlashMessage[] = [];

  constructor(private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.flashMessagesService.message.subscribe( message => {
      this.handleMessage(message);
    });
  }

  handleMessage(message: IFlashMessage) {
    const defaultOpts: IFlashMessageOptions = {
      classes: [],
      timeout: 3000
    };
    Object.assign(defaultOpts, message.options);
    message.options = defaultOpts;

    const timestamp = message.timestamp = + new Date();

    this.messages.push(message);

    setTimeout(() => {
      this.messages = this.messages.filter( msg => msg.timestamp !== timestamp );
    }, message.options.timeout);
  }

}
