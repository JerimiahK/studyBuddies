const router = require("express").Router();
const { Topics, Categories, Subtopics } = require("../models");

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
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//// http:localhost:3001/subtopics
router.get("/subtopics/:id", async (req, res) => {
  try {
    const subtopicsData = await Subtopics.findByPk(req.params.id, {
      include: [{ model: Topics }],
    });
    const subtopics = subtopicsData.get({ plain: true });
    res.render("subtopic", {
      subtopics,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
