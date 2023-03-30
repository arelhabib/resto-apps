const { Router } = require("express");
const restaurantRoute = Router();
const { RestaurantController } = require("../controllers");

restaurantRoute.get("/", RestaurantController.getRestaurants);
restaurantRoute.post("/create", RestaurantController.create);
restaurantRoute.get("/delete/:id", RestaurantController.delete);
restaurantRoute.get("/edit/:id", RestaurantController.editPage);
restaurantRoute.post("/edit/:id", RestaurantController.edit);

module.exports = restaurantRoute;
