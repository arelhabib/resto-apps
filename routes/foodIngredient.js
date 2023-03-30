const { Router } = require("express");
const foodIngredientRoute = Router();
const { FIController } = require("../controllers");

foodIngredientRoute.get("/", FIController.getFoodIngredients);
foodIngredientRoute.post("/create", FIController.create);
foodIngredientRoute.get("/delete/:FIjunctionId", FIController.delete);
// foodIngredientRoute.get("/info/:id", FIController.info);
foodIngredientRoute.post("/edit/:id", FIController.edit);
foodIngredientRoute.get("/:id/ingredients", FIController.findAllIngredients);
foodIngredientRoute.get("/:id/addIngredient", FIController.addIngredient);

module.exports = foodIngredientRoute;
