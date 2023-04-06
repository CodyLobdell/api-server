'use strict';

require('dotenv').config();
const sequelize = require('./index');
const DataTypes = require('sequelize');
// define a table
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
// export a table
module.exports = Hat;