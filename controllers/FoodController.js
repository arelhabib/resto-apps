const { food } = require("../models");

class FoodController {
  static async getFoods(req, res) {
    try {
      let foods = await food.findAll();

      if (req.headers.accept.search("html") >= 0) {
        return res.render("foods/index.ejs", { foods });
      }

      res.json(foods);
    } catch (err) {
      res.json(err);
    }
  }

  static async createPage(req, res) {
    res.render("food/createPage.ejs");
  }

  static async create(req, res) {
    try {
      const { name, image, price, retaurantId } = req.body;
      let resultFood = await food.create({
        name,
        image,
        price,
        retaurantId,
      });

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/foods");
      }

      res.json(resultFood);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.foodId;

      let resultFood = await food.destroy({
        where: { id },
      });

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/foods");
      }

      resultFood === 1
        ? res.json({
            message: `Food id ${id} has been deleted!`,
          })
        : res.json({
            message: `Food id ${id} not found!`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async editDetail(req, res) {
    try {
      const id = +req.params.id;
      let foods = await food.findByPk(id);

      if (req.headers.accept.search("html") >= 0) {
        return res.render("food/editPage.ejs", { foods });
      }

      foods !== null
        ? res.json(foods.dataValues)
        : res.json({
            message: `Food id ${id} not found!`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async edit(req, res) {
    try {
      const id = Number(req.params.id);
      const { name, image, price, restaurantId } = req.body;

      let resultFood = await food.update(
        {
          name,
          image,
          price,
          restaurantId,
        },
        {
          where: { id },
        }
      );

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/foods");
      }

      resultFood[0] === 1
        ? res.json({
            message: `Food id ${id} has been updated!`,
          })
        : res.json({
            message: `Food ${id} not found`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = FoodController;
