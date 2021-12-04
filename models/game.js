const { Model, DataTypes } = require("sequelize");
const sequelize= require("../config/connection");
// This model of game
class Game extends Model {}

Game.init(
    {
      // define columns
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      game_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      game_desc:
      {
        type: DataTypes.STRING,
        allowNull: true,
      },
      publication_year: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      game_genre:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      console:{
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: "game",
    }
  );

  
  module.exports = Game;