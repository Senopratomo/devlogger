'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('logger service', function() {
  it('registered the loggers service', () => {
    assert.ok(app.service('loggers'));
  });
});
