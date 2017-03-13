import { Component, OnInit } from '@angular/core';
import {
  FlashMessagesService,
  IFlashMessage,
  IFlashMessageOptions,
} from './flash-messages.service';
export declare class FlashMessagesComponent implements OnInit {
  public messages: IFlashMessage[];
  constructor(flashMessagesService: FlashMessagesService);
  ngOnInit(): void;
  handleMessage(message: IFlashMessage): void;
}