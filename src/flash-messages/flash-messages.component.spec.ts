/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashMessagesComponent } from './flash-messages.component';
import {
  FlashMessagesService,
  IFlashMessage,
  IFlashMessageOptions,
} from './flash-messages.service';

describe('FlashMessagesComponent', () => {
  let component: FlashMessagesComponent;
  let fixture: ComponentFixture<FlashMessagesComponent>;
  let flashMessagesService: FlashMessagesService;
  let mockMessageText: string;
  let mockMessageOptions: IFlashMessageOptions;
  let mockMessage: IFlashMessage;

  beforeEach(async(() => {
    const injector = TestBed.configureTestingModule({
      declarations: [ FlashMessagesComponent ],
      providers: [
        FlashMessagesService,
      ],
    });
    injector.compileComponents();
    flashMessagesService = <FlashMessagesService>injector.get(FlashMessagesService);

    mockMessageText = 'This is my flash message';
    mockMessageOptions = {
      classes: ['class-name', 'second-class'],
      timeout: 200
    };
    mockMessage = {
      text: mockMessageText,
      options: mockMessageOptions
    };
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should detect when a message has been added', () => {
    spyOn(component, 'handleMessage');
    flashMessagesService.show(mockMessageText, mockMessageOptions);

    expect(component.handleMessage).toHaveBeenCalledWith(mockMessage);
  });

  it('Should push a new message to the list', () => {
    expect(component.messages.length).toEqual(0);

    component.handleMessage(mockMessage);

    expect(component.messages.length).toEqual(1);
    expect(component.messages[0]).toEqual(mockMessage);
  });

  it('Should add a timestamp to a message', () => {
    component.handleMessage(mockMessage);

    expect(component.messages[0].timestamp).toBeDefined();
    expect(component.messages[0].timestamp).toEqual(jasmine.any(Number));
  });

  describe('Message timeouts', () => {
    beforeEach(() => {
      jasmine.clock().uninstall();
      jasmine.clock().install();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it('Should remove the message after timeout has depleted', () => {
      const mockTimeout = 25;
      component.handleMessage(<IFlashMessage>{
        text: mockMessageText,
        options: { timeout: mockTimeout }
      });

      expect(component.messages.length).toEqual(1);
      jasmine.clock().tick(26);
      expect(component.messages.length).toEqual(0);
    });
  });

  it('Should provide default options', () => {
    component.handleMessage({ text: mockMessageText });

    expect(component.messages[0].options).toBeDefined();
    expect(component.messages[0].options.classes).toEqual([]);
    expect(component.messages[0].options.timeout).toEqual(jasmine.any(Number));
  });
});
