const { Router } = require("express");
const foodIngredientRoute = Router();
const { FIController } = require("../controllers");

foodIngredientRoute.get("/", FIController.getFoodIngredients);
foodIngredientRoute.get("/create", FIController.createPage);
foodIngredientRoute.post("/create", FIController.create);
foodIngredientRoute.get("/delete/:ingredientId", FIController.delete);
foodIngredientRoute.get("/info/:id", FIController.info);
foodIngredientRoute.post("/edit/:id", FIController.edit);
foodIngredientRoute.get("/:id/ingredients", FIController.findAllIngredients);

module.exports = foodIngredientRoute;
