const { food } = require("../models");

class FoodController {
  static async getFoods(req, res) {
    try {
      let foods = await food.findAll();
      res.render("foods/index.ejs", { foods });
      // res.json(foods);
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
      res.json(resultFood);
      //   res.redirect("/companies");
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

  static editPage(req, res) {}

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
