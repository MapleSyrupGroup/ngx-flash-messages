import { Component, OnInit } from '@angular/core';

import { FlashMessagesService, IFlashMessageOptions } from '../flash-messages/flash-messages.service';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messageText: string;
  messageClass: string;
  messageTimeout: number;

  readonly classList: string[] = [
    'alert-success',
    'alert-info',
    'alert-warning',
    'alert-danger',
  ];

  readonly defaultMessage = 'Flash message!';
  readonly defaultClass = 'alert-success';

  constructor(private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.messageClass = this.classList[0];
  }

  createFlashMessage() {
    const message = this.messageText || this.defaultMessage;
    const options: IFlashMessageOptions = {
      classes: [
        'alert',
        this.messageClass || this.defaultClass,
      ],
    };

    if (this.messageTimeout) {
      options.timeout = this.messageTimeout;
    }

    this.flashMessages.show(message, options);
  }
}
