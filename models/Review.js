"use strict";
const { Model, DataTypes } = require("sequelize");
const User = require("./User");
const Ride = require("./Ride");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // define association here
    }
  }
  Review.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      reviewerId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      revieweeId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      rideId: {
        type: DataTypes.INTEGER,
        references: {
          model: Ride,
          key: "id",
        },
      },
      rating: DataTypes.FLOAT,
      review: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "Reviews",
    }
  );
  return Review;
};
