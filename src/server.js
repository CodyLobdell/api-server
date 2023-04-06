'use strict';
// import cors, express, routes, error handler
require('dotenv').config
const express = require('express');
const app = express();
const cors = require('cors');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');
const logger = require('./middleware/logger');
const hatRouter = require('./routes/hat');
const pantsRouter = require('./routes/pants');
//use cors, allow json
app.use(cors());
app.use(express.json());
app.use(logger);
// validator for routers define at endpoint
app.use('/pants', validator, pantsRouter);
app.use('/hat', validator, hatRouter);
// error handler
app.use("*", error404);
app.use(error500);

// export app and start
module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    })
  }
}