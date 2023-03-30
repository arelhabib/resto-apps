const { Router } = require("express");
const foodRoute = Router();
const { FoodController } = require("../controllers");

foodRoute.get("/", FoodController.getFoods);
foodRoute.post("/create", FoodController.create);
foodRoute.get("/delete/:foodId", FoodController.delete);
foodRoute.get("/edit/:id", FoodController.editPage);
foodRoute.post("/edit/:id", FoodController.edit);

module.exports = foodRoute;
