const { ingredient } = require("../models");

class IngredientController {
  static async getIngredients(req, res) {
    try {
      let ingredients = await ingredient.findAll();

      if (req.headers.accept.search("html") >= 0) {
        return res.render("ingredients/index.ejs", { ingredients });
      }

      res.json(ingredients);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, price } = req.body;
      let resultIngredient = await ingredient.create({ name, price });

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/ingredients");
      }

      res.json(resultIngredient);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.ingredientId;

      let resultIngredient = await ingredient.destroy({
        where: { id },
      });

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/ingredients");
      }

      resultIngredient === 1
        ? res.json({
            message: `Ingredient id ${id} has been deleted!`,
          })
        : res.json({
            message: `Ingredient id ${id} not found!`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async editDetail(req, res) {
    const id = +req.params.id;
    let ingredients = await ingredient.findByPk(id);

    if (req.headers.accept.search("html") >= 0) {
      return res.render("ingredients/editPage.ejs", { ingredients });
    }

    ingredients !== null
      ? res.json(ingredients.dataValues)
      : res.json({
          message: `Ingredient id ${id} not found!`,
        });
  }

  static async edit(req, res) {
    try {
      const id = Number(req.params.id);
      const { name, price } = req.body;

      let resultIngredient = await ingredient.update({ name, price }, { where: { id } });

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/ingredients");
      }

      resultIngredient[0] === 1
        ? res.json({
            message: `Ingredient id ${id} has been updated!`,
          })
        : res.json({
            message: `Ingredient ${id} not found`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = IngredientController;
