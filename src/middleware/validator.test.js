'use strict';

const validator = require('./validator');

describe('Test the validator', () => {
  test('Test if query string found. If contains name, passes request to next', () => {
    const request = { query: { name: 'test'} };
    const response = {};
    const next = jest.fn();

    validator(request, response, next);
    expect(request.query.name).toEqual('test');
    expect(next).toHaveBeenCalled();
  });

  test('Test if no query sting found', () => {
    const request = { query: { id: 'test'} };
    const response = {};
    const next = jest.fn();

    validator(request, response, next);
    expect(next).toHaveBeenCalledWith('Checking Users Name');
  });
});