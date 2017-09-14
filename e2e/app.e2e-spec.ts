import { AAssignment14Page } from './app.po';

describe('a-assignment14 App', function() {
  let page: AAssignment14Page;

  beforeEach(() => {
    page = new AAssignment14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
