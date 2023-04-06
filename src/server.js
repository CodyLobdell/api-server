'use strict';

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

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/pants', validator, pantsRouter);
app.use('/hat', validator, hatRouter);

app.use("*", error404);
app.use(error500);


module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    })
  }
}