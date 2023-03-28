const { Router } = require("express");
const restaurantRoute = Router();
const { RestaurantController } = require("../controllers");

restaurantRoute.get("/", RestaurantController.getRestaurants);
restaurantRoute.get("/create", RestaurantController.createPage);
restaurantRoute.post("/create", RestaurantController.create);
restaurantRoute.get("/delete/:id", RestaurantController.delete);
restaurantRoute.get("/edit/:id", RestaurantController.editPage);
restaurantRoute.post("/edit/:id", RestaurantController.edit);
// restaurantRoute.get("/info/:id", RestaurantController.info);

module.exports = restaurantRoute;
