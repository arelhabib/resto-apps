"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FIjunctions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      foodId: {
        references: {
          model: "food",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
        type: Sequelize.INTEGER,
      },
      ingredientId: {
        references: {
          model: "ingredients",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
        type: Sequelize.INTEGER,
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("FIjunctions");
  },
};
