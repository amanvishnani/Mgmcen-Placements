import { MgmcenPlacementsPage } from './app.po';

describe('mgmcen-placements App', () => {
  let page: MgmcenPlacementsPage;

  beforeEach(() => {
    page = new MgmcenPlacementsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
