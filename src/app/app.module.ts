import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FlashMessagesModule } from '../flash-messages/flash-messages.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
