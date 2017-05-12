import { EmaPage } from './app.po';

describe('ema App', () => {
  let page: EmaPage;

  beforeEach(() => {
    page = new EmaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
