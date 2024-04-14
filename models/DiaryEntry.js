const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const DiaryEntry = sequelize.define('DiaryEntry', {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photos: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    freezeTableName: true,
});

module.exports = DiaryEntry;
