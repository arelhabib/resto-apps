const { restaurant, food } = require("../models");

class RestaurantController {
  static async getRestaurants(req, res) {
    try {
      let restaurants = await restaurant.findAll({
        order: [["id", "asc"]],
        include: [food],
      });
      if (req.headers.accept.search("html") >= 0) {
        return res.render("restaurants/index.ejs", { restaurants });
      }
      res.json(restaurants);
    } catch (err) {
      res.status(err);
    }
  }

  static async create(req, res) {
    try {
      const { name } = req.body;
      let result = await restaurant.create({
        name,
      });

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/restaurants");
      }

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let resultRestaurant = await restaurant.destroy({
        where: { id },
      });

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/restaurants");
      }

      resultRestaurant === 1
        ? res.json({
            message: `Restaurant Id ${id} has been deleted`,
          })
        : res.json({
            message: `Restaurant Id ${id} not found!`,
          });
    } catch (err) {
      res.json(err);
    }
  }
  static async editPage(req, res) {
    try {
      const id = +req.params.id;
      let restaurants = await restaurant.findByPk(id);

      if (req.headers.accept.search("html") >= 0) {
        return res.render("restaurants/editPage.ejs", { restaurants });
      }

      restaurants !== null
        ? res.json(restaurants.dataValues)
        : res.json({
            message: `Restaurant id ${id} not found!`,
          });
    } catch (err) {
      res.json(err);
    }
  }
  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;

      let result = await restaurant.update(
        {
          name,
        },
        {
          where: { id },
        }
      );

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/restaurants");
      }

      result[0] === 1
        ? res.json({
            message: `Restaurant Id ${id} has been updated!`,
          })
        : res.json({
            message: `Restaurant Id ${id} no changes!`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = RestaurantController;
