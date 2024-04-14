const { Sequelize } = require('sequelize');
const path = require('path');

const dbPath = path.resolve(__dirname, '../travel.db');

let sequelize;

try {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath, 
  });
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
