"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      food.belongsTo(models.restaurant, {
        foreignKey: "restaurantId",
        onDelete: "SET NULL",
      });
      food.belongsToMany(models.ingredient, { through: models.FIjunction });
    }
  }
  food.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      image: DataTypes.STRING,
      price: DataTypes.INTEGER,
      restaurantId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (food, options) => {
          food.image = "https://via.placeholder.com/100x100";
        },
      },
      sequelize,
      modelName: "food",
    }
  );
  return food;
};
