"use strict";
const { Model, DataTypes } = require("sequelize");
const User = require("./User");

module.exports = (sequelize, DataTypes) => {
  class Ride extends Model {
    static associate(models) {
      // define association here
    }
  }
  Ride.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      driverId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      passengerId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      startLocation: DataTypes.STRING,
      endLocation: DataTypes.STRING,
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ride",
      tableName: "Rides",
    }
  );
  return Ride;
};
