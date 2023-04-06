'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing server performance', () => {

  test('Test if query contains name with a string value. Return JSON upon success with name', async () => {
    let response = await request.get('/person?name=test');
    let result = { name: 'test' };
    expect(response.body).toEqual(result);
  });

  test('Testing route. If not found, return 404 error', async () => {
    let response = await request.get('/test');
    expect(response.status).toEqual(404);
  });

  test('Testing method. If not found, return 404 error', async () => {
    let response =
      await request.post('/person?name=test');
    expect(response.status).toEqual(404);
  })

  test('Testing for name in query string. If not found, return 500 error', async () => {
    let response = await request.get('/person?name=');
    expect(response.status).toEqual(500);
  })
});