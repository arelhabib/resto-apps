"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ingredients", [
      {
        name: "Mie",
        price: 4000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Minyak",
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tepung",
        price: 4000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ingredients", null, {});
  },
};
