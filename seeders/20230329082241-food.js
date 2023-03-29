"use strict";

const { food } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert("food", [
    //   {
    //     name: "Gorengan",
    //     price: 2000,
    //     restaurantId: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     name: "Mie goreng",
    //     price: 10000,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ]);
    await food.bulkCreate(
      [
        {
          name: "Gorengan",
          price: 2000,
          restaurantId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mie goreng",
          price: 10000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { individualHooks: true }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("food", null, {});
  },
};
