"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Rides",
      [
        {
          driverId: 1, // User ID of the driver
          passengerId: 2, // User ID of the passenger
          startLocation: "Location A",
          endLocation: "Location B",
          startTime: new Date(),
          endTime: new Date(),
          status: "Completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more ride objects as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Rides", null, {});
  },
};
