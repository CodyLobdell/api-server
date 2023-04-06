'use strict';
// 500 error handler
function error500(err, request, response, next) {
  if (!request.query.name) {
    response.status(500).send(err)
  }
}

module.exports = error500;