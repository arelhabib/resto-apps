const { Router } = require("express");
const foodIngredientRoute = Router();
const { FIController } = require("../controllers");

foodIngredientRoute.get("/", FIController.getFoodIngredients);
foodIngredientRoute.post("/create", FIController.create);
foodIngredientRoute.get("/delete/:FIjunctionId", FIController.delete);
foodIngredientRoute.get("/:id/ingredients", FIController.findAllIngredients);

module.exports = foodIngredientRoute;
