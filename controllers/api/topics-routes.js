
// Topics Routes
const router = require("express").Router();
const Topics = require("../../models/Topics");
// http:localhost:3001/api/topics
//GET
router.get("/", async (req, res) => {
  try {
    const topicsData = await Topics.findAll({});

    // const subtopics = topicsData.map((subtopic) => subtopic.get({ plain: true }));
    res.status(200).json(topicsData);

    // Renders the subtopic.handlebars
    // res.render("subtopics", {
    //   subtopic,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http:localhost:3001/api/topics/:id
//POST
router.post("/", async (req, res) => {
  try {
    const topicsData = await Topics.create({
      topic_name: req.body.topic_name,
      // category_id: req.body.category_id,
    });
    res.status(200).json(topicsData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// http:localhost:3001/api/topics/
//PUT
router.put("/", async (req, res) => {
  try {
    const topicsData = await Topics.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return !topicsData ? res.status(404).json({ message: "No topic found with that id!" }) : res.status(200).json(topicsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// http:localhost:3001/api/topics/:id
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const topicsData = await topicsData.destroy({
      where: {
        id: req.params.id,
      },
    });
    return !topicsData ? res.status(404).json({ message: "No subtopic found with that id!" }) : res.status(200).json(topicsData);
  } catch (err) {
    res.status(500).json(err);
  }
});