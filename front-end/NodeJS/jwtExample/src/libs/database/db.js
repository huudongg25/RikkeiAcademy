const dbConfig = require('../../configs/connectDb')
const Sequelize = require('sequelize');

const connectMysql = new Sequelize(dbConfig.db.DATABASE, dbConfig.db.USERNAME, dbConfig.db.PASSWORD, {
  host: dbConfig.db.HOST,
  dialect: dbConfig.db.dialect,
});

module.exports = connectMysql;
