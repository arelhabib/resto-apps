const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("index.ejs");
});

const foodRoutes = require("./food");

route.use("/foods", foodRoutes);

module.exports = route;
