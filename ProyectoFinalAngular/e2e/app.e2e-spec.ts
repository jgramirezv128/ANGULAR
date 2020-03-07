import { ProyectoFinalPage } from './app.po';

describe('proyecto-final App', function() {
  let page: ProyectoFinalPage;

  beforeEach(() => {
    page = new ProyectoFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
