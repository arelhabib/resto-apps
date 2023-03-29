"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("restaurants", [
      {
        name: "John Rsto",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cool Resto",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("restaurants", null, {});
  },
};
