'use strict';

function validate(request, response, next) {
  let method = request.method;

  if (request.baseUrl.includes("employee")) {
    if ((method === 'PUT' || method === 'DELETE') && request.url === '/') {
      next('Please input an id');
    } else if (method === 'POST' && Object.keys(request.body).length === 0) {
      next('Please input all required information')
    } else {
      next();
    }
  } else if (request.baseUrl.includes('job-title')) {
    if ((method === 'PUT' || method === 'DELETE') && request.url === '/') {
      next('Please input an id');
    } else if (method === 'POST' && Object.keys(request.body).length === 0) {
      next('Please input all required information')
    } else {
      next();
    }
  } else {
    next();
  }
}

module.exports = validate;