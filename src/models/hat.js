'use strict';

require('dotenv').config();
const sequelize = require('./index');
const DataTypes = require('sequelize');

const Hat = sequelize.define("Hat", {
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false
  },
  style: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Hat;