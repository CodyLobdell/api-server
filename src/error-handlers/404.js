
'use strict';
// 404 error handler
function error404(request, response, next) {
  console.log("REQUEST METHOD", request.method);
  if (!request.method.includes(['GET', 'POST', 'PUT', 'DELETE'])) {
    response.status(404).send("Maybe next year");
  } else if (!request.path.includes('/pants' || !request.path.includes('/hat'))) {
    response.status(404).send("Requested page is not available");
  } else {
    next();
  }
}

module.exports = error404;