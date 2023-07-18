const { User, Ride, Review } = require("../models");
const factoryController = require("./factories/factoryController");

module.exports = {
  usersController: factoryController(User),
  ridesController: factoryController(Ride),
  reviewsController: factoryController(Review),
};
