import { EncryUiPage } from './app.po';

describe('encry-ui App', () => {
  let page: EncryUiPage;

  beforeEach(() => {
    page = new EncryUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
