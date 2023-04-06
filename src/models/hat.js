'use strict';

require('dotenv').config();
const sequelize = require('./index');
const DataTypes = require('sequelize');

const Hat = sequelize.define("Hat", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  perks: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Hat;