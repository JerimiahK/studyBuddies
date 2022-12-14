const router = require("express").Router();
const { Topics, Categories } = require("../models");

// http:localhost:3001/
//GET
router.get("/", async (req, res) => {
  try {
    const topicsData = await Topics.findAll({
      include: [{ model: Categories }],
    });
    const topics = topicsData.map((topic) => topic.get({ plain: true }));
    // Renders the homepage.handlebars
    res.render("homepage", {
      topics,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
