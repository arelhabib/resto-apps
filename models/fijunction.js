"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FIjunction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FIjunction.belongsTo(models.food);
      FIjunction.belongsTo(models.ingredient);
    }
  }
  FIjunction.init(
    {
      foodId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "FIjunction",
    }
  );
  return FIjunction;
};
