import { WebpackPage } from './app.po';

describe('webpack App', () => {
  let page: WebpackPage;

  beforeEach(() => {
    page = new WebpackPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
