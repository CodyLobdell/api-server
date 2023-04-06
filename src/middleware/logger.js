'use strict';

const validator = require('./validator');

describe('Test the validator', () => {
  test('Test if query string exist with name and passes request to next', () => {
    const request = { query: { name: 'test'} };
    const response = {};
    const next = jest.fn();

    validator(request, response, next);
    expect(request.query.name).toEqual('test');
    expect(next).toHaveBeenCalled();
  });

  test('Test if query string does not exist', () => {
    const request = { query: { id: 'test'} };
    const response = {};
    const next = jest.fn();

    validator(request, response, next);
    expect(next).toHaveBeenCalledWith('Please attach a name');
  });
});