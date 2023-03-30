"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("FIjunctions", [
      {
        foodId: 2,
        ingredientId: 1,
      },
      {
        foodId: 2,
        ingredientId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("FIjunctions", null, {});
  },
};
