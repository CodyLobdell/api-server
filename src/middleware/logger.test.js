'use strict';

const logger = require('./logger');

describe('Logger Test', () => {
  test('Logger Check to Continue', () => {
    const request = { query: { name: 'test'} };
    const response = {};
    const next = jest.fn();

    logger(request, response, next);

    expect(next).toHaveBeenCalled();
  });
});