'use strict';

const mock = require('egg-mock');

describe('test/xxmi-compress.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/xxmi-compress-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, xxmiCompress')
      .expect(200);
  });
});
