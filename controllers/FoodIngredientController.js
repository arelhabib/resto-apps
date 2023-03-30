const { FIjunction, food, ingredient } = require("../models");

class FIController {
  static async getFoodIngredients(req, res) {
    try {
      let FIjunctions = await FIjunction.findAll({
        include: [food, ingredient],
      });

      if (req.headers.accept.search("html") >= 0) {
        let ing = await ingredient.findAll();
        let fd = await food.findAll();

        let FI = await FIjunctions.reduce((fd, item) => {
          if (!fd[item.food.id]) {
            fd[item.food.id] = {
              id: item.food.id,
              food: item.food.name,
              ingredients: [],
            };
          }

          fd[item.food.id].ingredients.push(item.ingredient.name);
          return fd;
        }, []).filter((item) => item !== null);
        // console.log(FI);

        return res.render("foods-ingredients/index.ejs", {
          FI,
          fd,
          ing,
        });
      }

      res.json(FIjunctions);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { foodId, ingredientId } = req.body;
      // console.log(req.body);

      let result;
      if (ingredientId.length) {
        let input = [];
        ingredientId.forEach((ing) => {
          input.push({
            foodId: +foodId,
            ingredientId: +ing,
          });
        });

        result = await FIjunction.bulkCreate(input, {
          ignoreDuplicates: true,
        });
      } else {
        result = await FIjunction.create({
          foodId,
          ingredientId,
        });
      }
      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/foods-ingredients");
      }

      res.json(result);
    } catch (err) {
      if (req.headers.accept.search("html") >= 0) {
        return res.redirect(`/foods-ingredients`);
      }
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.FIjunctionId;

      let resultFIjunction = await FIjunction.destroy({
        where: { foodId: id },
      });

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/foods-ingredients");
      }

      resultFIjunction !== 0
        ? res.json({
            message: `FIjunction Food id ${id} has been deleted!`,
          })
        : res.json({
            message: `FIjunction Food id ${id} not found!`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async findAllIngredients(req, res) {
    try {
      const id = +req.params.id;
      let result = await FIjunction.findAll({
        where: { foodId: id },
        include: [food, ingredient],
      });

      let resultFI = {};
      let ingredients = [];
      let ingredientsTotal = 0;

      if (result.length === 0) {
        result = await food.findByPk(id);
        resultFI = {
          ...result.dataValues,
          ingredientsTotal,
          ingredients,
        };
      } else {
        ingredients = result.map((el) => {
          ingredientsTotal += el.ingredient.dataValues.price;
          return el.ingredient.dataValues;
        });
        resultFI = {
          ...result[0].food.dataValues,
          ingredientsTotal,
          ingredients,
        };
      }

      if (req.headers.accept.search("html") >= 0) {
        return res.render("foods-ingredients/infoFood.ejs", { FI: resultFI });
      }

      res.json(resultFI);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = FIController;
