import { Ng2MusicPage } from './app.po';

describe('ng2-music App', function() {
  let page: Ng2MusicPage;

  beforeEach(() => {
    page = new Ng2MusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
