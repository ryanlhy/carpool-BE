"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Reviews",
      [
        {
          reviewerId: 1, // User ID of the reviewer
          revieweeId: 2, // User ID of the reviewee
          rideId: 1, // Ride ID associated with the review
          rating: 4.5,
          review: "Great ride experience!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more review objects as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Reviews", null, {});
  },
};
