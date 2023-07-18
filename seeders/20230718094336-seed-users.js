"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "john@example.com",
          phone: "1234567890",
          password: "hashed_password",
          userType: "Driver",
          governmentID: "ABC123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "9876543210",
          password: "hashed_password",
          userType: "Passenger",
          governmentID: "XYZ456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more user objects as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
