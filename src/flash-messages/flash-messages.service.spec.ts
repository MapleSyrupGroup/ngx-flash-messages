import { FlashMessagesService, IFlashMessageOptions, IFlashMessage } from './flash-messages.service';
import { Subject } from 'rxjs/Subject';

describe('FlashMessagesService', () => {
  let flashMessages: FlashMessagesService;
  beforeEach(() => {
    flashMessages = new FlashMessagesService;
  });

  it('Should have a Subject where changes can be pushed', () => {
    expect(flashMessages.message instanceof Subject).toBeTruthy();
  });

  it('Should update subscription when a value is pushed', (done) => {
    const mockMessageText = 'This is my flash message';
    const mockMessageOptions: IFlashMessageOptions = {
      classes: ['class-name'],
      timeout: 200
    };
    flashMessages.message.subscribe( message => {
      expect(message).toEqual(<IFlashMessage>{
        text: mockMessageText,
        options: mockMessageOptions
      });
      done();
    });

    flashMessages.show(mockMessageText, mockMessageOptions);
  });

  it('Should provide empty options object if none passed', (done) => {
    const mockMessageTest = 'Information for the user';

    flashMessages.message.subscribe( message => {
      expect(message).toEqual(<IFlashMessage>{
        text: mockMessageTest,
        options: {}
      });
      done();
    });

    flashMessages.show(mockMessageTest);
  });
});
