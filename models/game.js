// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Game model (table) by extending off Sequelize's Model class
class Game extends Model {}

// set up fields and rules for Game model
Game.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    home: {
      type: DataTypes.STRING,
      allowNull: false
    },
    away: {
      type: DataTypes.STRING,
      allowNull: false
    },
    line: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'game',
  }
);

module.exports = Game;
