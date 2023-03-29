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
    });

    await queryInterface.addConstraint("FIjunctions", {
      type: "unique",
      fields: ["foodId", "ingredientId"],
      name: "FIjunctions_unique_constraint",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("FIjunctions");
  },
};
