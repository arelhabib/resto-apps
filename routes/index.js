const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("index.ejs");
});

const foodRoutes = require("./food");
const ingredientRoutes = require("./ingredient");
const restaurantRoutes = require("./restaurant");
const FoodIngreRoutes = require("./foodIngredient");

route.use("/foods", foodRoutes);
route.use("/ingredients", ingredientRoutes);
route.use("/foods-ingredients", FoodIngreRoutes);
route.use("/restaurants", restaurantRoutes);

module.exports = route;
