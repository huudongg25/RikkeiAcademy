const Sequelize = require('sequelize');
const dbConfig = require('../../configs/db.configs');

const connectMysql = new Sequelize("nike", "root", 'Liverpool98', {
  host: "localhost",
  dialect: "mysql",
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

module.exports = connectMysql;
