'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');
const SQL_URL = process.env.DB_LOCAL_URL || process.env.DB_URL;

const sequelize = new Sequelize(SQL_URL);
module.exports = sequelize;