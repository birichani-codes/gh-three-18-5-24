const { Sequelize } = require('sequelize');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.js')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect
});

module.exports = sequelize;
