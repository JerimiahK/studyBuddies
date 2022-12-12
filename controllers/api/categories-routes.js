// Categories Routes
const router = require("express").Router();
const Category = require("../../models/Categories");
const { json } = require("sequelize");

// http:localhost:3001/api/categories
//GET
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    console.log(categories);
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// http:localhost:3001/api/categories
//POST
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});
// http:localhost:3001/api/categories/
//PUT
router.put("/:id", async (req, res) => {
  try {
    const categoryUpdate = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(categoryUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

// http:localhost:3001/api/categories/:id
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category with that ID exists!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
