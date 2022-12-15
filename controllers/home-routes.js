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

// router.get("/subtopics", async (req, res) => {
//   try {
//     const subtopicsData = await Subtopics.findAll({
//       include: [{ model: Topics }],
//     });
//     const subtopics = subtopicsData.map((subtopic) => {
//       subtopic.get({
//         plain: true,
//       });
//       console.log(subtopic);
//     });
//     res.render("subtopic", {
//       subtopics,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// module.exports = router;

//// http:localhost:3001/subtopics

module.exports = router;
