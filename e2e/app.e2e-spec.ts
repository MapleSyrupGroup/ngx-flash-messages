import { NgxFlashMessagesPage } from './app.po';

describe('Ngx-flash-messages App', () => {
  let page: NgxFlashMessagesPage;

  beforeEach(() => {
    page = new NgxFlashMessagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
