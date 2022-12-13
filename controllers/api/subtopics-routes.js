// Subtopics Routes
const router = require("express").Router();
const { Subtopics, Topics } = require("../../models/");

// http:localhost:3001/api/subtopics
//GET
router.get("/", async (req, res) => {
  try {
    const subtopicsData = await Subtopics.findAll({
      include: [{ model: Topics }],
    });

    // const subtopics = subtopicsData.map((subtopic) => subtopic.get({ plain: true }));
    res.status(200).json(subtopicsData);

    // Renders the subtopic.handlebars
    // res.render("subtopics", {
    //   subtopic,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http:localhost:3001/api/subtopics/:id
//POST
router.post("/", async (req, res) => {
  try {
    const subtopicsData = await Subtopics.create({
      description: req.body.description,
      code_examples: req.body.code_examples,
      demo_code: req.body.demo_code,
      resources: req.body.resources,
    });
    res.status(200).json(subtopicsData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// http:localhost:3001/api/subtopics/
//PUT
router.put("/", async (req, res) => {
  try {
    const subtopicsData = await Subtopics.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return !subtopicsData ? res.status(404).json({ message: "No subtopic found with that id!" }) : res.status(200).json(subtopicsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// http:localhost:3001/api/subtopics/:id
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const subtopicsData = await Subtopics.destroy({
      where: {
        id: req.params.id,
      },
    });
    return !subtopicsData ? res.status(404).json({ message: "No subtopic found with that id!" }) : res.status(200).json(subtopicsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
