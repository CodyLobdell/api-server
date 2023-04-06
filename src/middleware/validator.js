'use strict';
// to make sure everything works before passing down to the next middleware
function validate(request, response, next) {
  let method = request.method;

  if (request.baseUrl.includes("pants")) {
    if ((method === 'PUT' || method === 'DELETE') && request.url === '/') {
      next('Please input an id');
    } else if (method === 'POST' && Object.keys(request.body).length === 0) {
      next('Please input all required information')
    } else {
      next();
    }
  } else if (request.baseUrl.includes('hat')) {
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