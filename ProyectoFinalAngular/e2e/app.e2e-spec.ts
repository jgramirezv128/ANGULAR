import { ProyectoFinalAngularPage } from './app.po';

describe('proyecto-final-angular App', function() {
  let page: ProyectoFinalAngularPage;

  beforeEach(() => {
    page = new ProyectoFinalAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
