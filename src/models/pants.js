'use strict';

require('dotenv').config();
const sequelize = require('./index');
const DataTypes = require('sequelize');

const Pants = sequelize.define("Pants", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  employed: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Pants;