import { ModuleTestPage } from './app.po';

describe('module-test App', function() {
  let page: ModuleTestPage;

  beforeEach(() => {
    page = new ModuleTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
