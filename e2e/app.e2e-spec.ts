import { CatLocatePage } from './app.po';

describe('cat-locate App', function() {
  let page: CatLocatePage;

  beforeEach(() => {
    page = new CatLocatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
