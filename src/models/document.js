// document.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Document = sequelize.define('Document', {
    document_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    client_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'clients', // assumes client table is named 'clients'
            key: 'client_id'
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    original_file_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    copy_file_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    document_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    upload_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at_date: {
        type: DataTypes.DATE
    },
    end_date: {
        type: DataTypes.DATE
    }
});

module.exports = Document;

/*const pool = require("../connection/pool");
module.exports = (sequelize, DataTypes) => {
    const Document = sequelize.define('Document', {
      document_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      client_id: { type: DataTypes.INTEGER, references: { model: 'Clients', key: 'client_id' }},
      status: DataTypes.STRING,
      original_file_name: DataTypes.STRING,
      copy_file_name: DataTypes.STRING,
      document_type: DataTypes.STRING,
      upload_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updated_at_date: DataTypes.DATE,
      end_date: DataTypes.DATE
    });
    return Document;
  };*/
  