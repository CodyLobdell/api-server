
'use strict';

function error404(request, response, next) {
  console.log("REQUEST METHOD", request.method);
  if (!request.method.includes(['GET', 'POST', 'PUT', 'DELETE'])) {
    response.status(404).send("Maybe next year");
  } else if (!request.path.includes('/employee' || !request.path.includes('/job-title'))) {
    response.status(404).send("Requested page is not available");
  } else {
    next();
  }
}

module.exports = error404;