"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ingredient.belongsToMany(models.food, { through: models.FIjunction });
    }
  }
  ingredient.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: true },
    },
    {
      sequelize,
      modelName: "ingredient",
    }
  );
  return ingredient;
};
