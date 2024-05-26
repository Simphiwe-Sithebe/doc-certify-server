module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
      client_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      username: { type: DataTypes.STRING, unique: true },
      phone: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      registration_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    return Client;
  };
/*const pool = require("../connection/pool");

  // client.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Client = sequelize.define('Client', {
    client_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    registration_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Client;
*/
  