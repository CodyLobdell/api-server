'use strict';

const sequelize = require('../src/models');
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const seed = require('../seed');

beforeAll(async () => {
  seed();
});
afterAll(async () => {
  await sequelize.drop({});
});

describe('Testing 404 errors', () => {
  test('404 bad method', async() => {
    let response = await request.patch('/pants');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });

  test('404 bad path', async() => {
    let response = await request.get('/toejam');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });
});

describe('Testing GET all routes', () => {
  
  test('All pants in database', async() => {
    let response = await request.get('/pants');
    expect(response.body.length).toEqual(1);
  });

  test('All hats in database', async() => {
    let response = await request.get('/hat');
    expect(response.body.length).toEqual(1);
  });
});

describe('Testing GET ID routes', () => {

  test('Locate Pants according to ID', async() => {
    let response = await request.get(`/pants/1`);
    expect(response._body[0].id).toEqual(1);
  })

  test('Locate Hat according to ID', async() => {
    let response = await request.get('/hat/1');
    expect(response._body[0].id).toEqual(1);
  })
});

describe('Testing POST routes', () => {
  
  test('Creating pants for pants table', async() => {
    let data = {
      color: 'blue',
      size: large,
      style: false
    }
    
    let response = await request.post('/pants').send(data);
    let received ={
      color: response.body.color,
      size: response.body.size,
      style: response.body.style
    }

    expect(received).toEqual(data);
  });

  test('Creating hats for hats table', async() => {
    let data = {
      color: 'its green',
      size: small,
      style: false
    }
    
    let response = await request.post('/hat').send(data);
    let received ={
      color: response.body.color,
      size: response.body.size,
      style: response.body.style
    }

    expect(received).toEqual(data);
  });
});

describe('Testing DELETE routes', () => {
  
  test('Deleting pants from pants table', async() => {
    await request.delete('/pants/2')
    let response = await request.get('/pants/2')
    expect(response.body).toEqual([]);
  });

  test('Deleting a hat from hat table', async() => {
    await request.delete('/hat/2')
    let response = await request.get('/hat/2')
    expect(response.body).toEqual([]);
  });
});