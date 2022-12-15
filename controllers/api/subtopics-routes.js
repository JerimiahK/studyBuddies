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
    res.status(200).json(subtopicsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// /:topic_id
// where: {topic_id : res.params.id},
// attributes: ["topic_id"],
// topic_id: res.topic_id,

//How can we search our database to find all subtopics with a topic_id that matches the card being clicked on???

router.get("/:topic_id", async (req, res) => {
  try {
    const subtopicsData = await Subtopics.findAll({
      include: [
        {
          model: Topics,
        },
      ],
    });
    res.status(200).json(subtopicsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     console.log(req);
//     const subtopicsData = await Subtopics.findByPk(req.params.id, {
//       include: [{ model: Topics }],
//     });

//     const subtopics = subtopicsData.get({ plain: true });
//     res.render("subtopic", {
//       subtopics,
//       loggedIn: req.session.loggedIn,
//       // topic_name :
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// http:localhost:3001/api/subtopics/:id
//POST
router.post("/", async (req, res) => {
  try {
    const subtopicsData = await Subtopics.create({
      subtopic_name: req.body.subtopic_name,
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
router.put("/:id", async (req, res) => {
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
