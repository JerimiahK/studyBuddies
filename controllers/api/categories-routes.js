// Categories Routes
const router = require("express").Router();
const { Category, Subtopic } = require("../../models");

// http:localhost:3001/api/categories
//GET
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Subtopic }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// http:localhost:3001/api/categories/:id
//POST
router.post("/:id", (req, res) => {});
// http:localhost:3001/api/categories/
//PUT

// http:localhost:3001/api/categories/:id
//DELETE
