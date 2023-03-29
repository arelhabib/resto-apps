const { FIjunction, food, ingredient } = require("../models");

class FIController {
  static async getFoodIngredients(req, res) {
    try {
      let FIjunctions = await FIjunction.findAll({
        include: [food, ingredient],
      });

      if (req.headers.accept.search("html") >= 0) {
        res.render("foods-ingredients/index.ejs", { FIjunctions });
      }

      res.json(FIjunctions);
    } catch (err) {
      res.json(err);
    }
  }

  static createPage(req, res) {
    res.render("FIjunction/createPage.ejs");
  }

  static async create(req, res) {
    try {
      const { foodId, ingredientId } = req.body;
      let resultFIjunction = await FIjunction.create({
        foodId: +foodId,
        ingredientId: +ingredientId,
      });

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/FIjunctions");
      }

      res.json(resultFIjunction);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.FIjunctionId;

      let resultFIjunction = await FIjunction.destroy({
        where: { id },
      });

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/FIjunctions");
      }

      resultFIjunction === 1
        ? res.json({
            message: `FIjunction id ${id} has been deleted!`,
          })
        : res.json({
            message: `FIjunction id ${id} not found!`,
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
      //pake s sama engga beda hasilnya
      let ingredients = result.map((item) => {
        return item.ingredient.dataValues;
      });

      if (req.headers.accept.search("html") >= 0) {
        //boleh diganti method sesuai kebutuhan
        return res.redirect("/");
      }

      res.json({ ...result[0].food.dataValues, ingredients });
    } catch (error) {
      res.json(error);
    }
  }

  // fungsi edit belum ada yg perlu digunakan

  static async info(req, res) {
    const id = +req.params.id;
    let FIjunctions = await FIjunction.findByPk(id);

    // if (req.headers.accept.search("html") >= 0) {
    //   res.render("FIjunction/editPage.ejs", { FIjunctions });
    // }

    FIjunctions !== null
      ? res.json(FIjunctions.dataValues)
      : res.json({
          message: `FIjunction id ${id} not found!`,
        });
  }

  static async edit(req, res) {
    try {
      const id = Number(req.params.id);
      const { name } = req.body;

      let resultFIjunction = await FIjunction.update({ name }, { where: { id } });

      if (req.headers.accept.search("html") >= 0) {
        return res.redirect("/FIjunctions");
      }

      resultFIjunction[0] === 1
        ? res.json({
            message: `FIjunction id ${id} has been updated!`,
          })
        : res.json({
            message: `FIjunction ${id} not found`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = FIController;
