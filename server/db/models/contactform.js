'use strict';
const { Sequelize, Model } = require('sequelize');
const sequelize = require('../../config/database');

class ContactForm extends Model {}

ContactForm.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  your_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  captcha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  deletedAt: {
    type: Sequelize.DATE
  },
}, {
  sequelize,
  paranoid: true,
  freezeTableName: true,
  modelName: 'ContactForms'
});

module.exports = ContactForm;
