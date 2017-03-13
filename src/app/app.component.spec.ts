import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FlashMessagesModule } from '../flash-messages/flash-messages.module';
import { FlashMessagesService, IFlashMessageOptions } from '../flash-messages/flash-messages.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const expectedDefaultMsg = 'Flash message!';
  let flashMessagesService: FlashMessagesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        FlashMessagesModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    flashMessagesService = TestBed.get(FlashMessagesService);
  });

  it('Should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Should include the ngx-flash-messages component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ngx-flash-messages')).toBeTruthy();
  }));

  it('Should be able to create a flash-message from a value and class', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.debugElement.componentInstance;
    const mockMessage = 'This is a mock message';
    const mockClass = 'alert-success';
    spyOn(flashMessagesService, 'show');
    fixture.detectChanges();

    component.messageText = mockMessage;
    component.messageClass = mockClass;
    component.createFlashMessage();
    expect(flashMessagesService.show).toHaveBeenCalledWith(mockMessage, <IFlashMessageOptions>{
      classes: ['alert', mockClass]
    });
  });

  it('Should have a default message and class if nothing is passed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.debugElement.componentInstance;
    spyOn(flashMessagesService, 'show');
    fixture.detectChanges();
    component.messageText = '';
    component.messageClass = '';

    component.createFlashMessage();
    expect(flashMessagesService.show).toHaveBeenCalledWith(expectedDefaultMsg, <IFlashMessageOptions>{
      classes: ['alert', 'alert-success'],
    });
  });

  it('Should have a list of classes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component: AppComponent  = fixture.debugElement.componentInstance;
    const expectedClasses = [
      'alert-success',
      'alert-info',
      'alert-warning',
      'alert-danger',
    ];
    fixture.detectChanges();

    expect(component.classList).toEqual(expectedClasses);
  });

  it('Should have the alert-success class selected by default', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.debugElement.componentInstance;
    const expectedPreSelected = 'alert-success';
    fixture.detectChanges();

    expect(component.messageClass).toEqual(expectedPreSelected);
  });

  it('Should be able to send tiemout duration', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.debugElement.componentInstance;
    const mockTimeout = 5000;
    spyOn(flashMessagesService, 'show');
    fixture.detectChanges();

    component.messageTimeout = mockTimeout;
    component.createFlashMessage();
    expect(flashMessagesService.show).toHaveBeenCalledWith(expectedDefaultMsg, <IFlashMessageOptions>{
      classes: ['alert', 'alert-success'],
      timeout: mockTimeout,
    });
  });
});
