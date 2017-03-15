import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashMessagesService } from './flash-messages.service';
import { FlashMessagesComponent } from './flash-messages.component';

export { FlashMessagesService } from './flash-messages.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    FlashMessagesService,
  ],
  declarations: [
    FlashMessagesComponent,
  ],
  exports: [
    FlashMessagesComponent,
  ]
})
export class FlashMessagesModule { }
