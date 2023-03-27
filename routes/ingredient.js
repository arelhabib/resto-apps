const { Router } = require("express");
const ingredientRoute = Router();
const { IngredientController } = require("../controllers");

ingredientRoute.get("/", IngredientController.getIngredients);
ingredientRoute.get("/create", IngredientController.createPage);
ingredientRoute.post("/create", IngredientController.create);
ingredientRoute.get("/delete/:ingredientId", IngredientController.delete);
ingredientRoute.get("/edit/:id", IngredientController.editDetail);
ingredientRoute.post("/edit/:id", IngredientController.edit);

module.exports = ingredientRoute;
