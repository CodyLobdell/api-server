'use strict';

require('dotenv').config();
const sequelize = require('./index');
const DataTypes = require('sequelize');
// define a table
const Pants = sequelize.define("Pants", {
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  style: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});
// export a table
module.exports = Pants;