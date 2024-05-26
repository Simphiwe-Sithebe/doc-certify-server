// admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Admin = sequelize.define('Admin', {
    admin_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    document_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'documents', // assumes document table is named 'documents'
            key: 'document_id'
        }
    },
    user_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
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

module.exports = Admin;

/*const pool = require("../connection/pool");
module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
      admin_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      document_id: { type: DataTypes.INTEGER, references: { model: 'Documents', key: 'document_id' }},
      user_type: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      registration_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    return Admin;
  };*/
  