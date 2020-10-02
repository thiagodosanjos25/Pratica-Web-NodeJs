const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Spoiler = sequelize.define("cadastro", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nome: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING(40),
    validate: {
      len: [2, 40]
    }
  },
  });

module.exports = Cadastro;
