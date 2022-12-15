// Topics Routes
const router = require("express").Router();
const { Topics, Categories } = require("../../models");

// http:localhost:3001/api/topics
//GET
router.get("/", async (req, res) => {
  try {
    const topicsData = await Topics.findAll({
      include: [{ model: Categories }],
    });
    res.status(200).json(topicsData);
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
      category_id: req.body.category_id,
    });
    res.status(200).json(topicsData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// http:localhost:3001/api/topics/
//PUT
router.put("/:id", async (req, res) => {
  try {
    const topicsData = await Topics.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return !topicsData
      ? res.status(404).json({ message: "No topic found with that id!" })
      : res.status(200).json(topicsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// http:localhost:3001/api/topics/:id
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const topicsData = await Topics.destroy({
      where: {
        id: req.params.id,
      },
    });
    return !topicsData
      ? res.status(404).json({ message: "No subtopic found with that id!" })
      : res.status(200).json(topicsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
