// Subtopics Routes
const router = require("express").Router();
const { Subtopics, Topics, SubtopicStatus, Users } = require("../../models/");

router.get("/", async (req, res) => {
  // const topicID = req.query.id;
  const topicID = 1;

  // const currentUser = req.session.id;
  const userID = req.session.id;

  try {
    const subtopicData = await Subtopics.findAll({
      where: { topic_id: topicID },
      attributes: ["id", "description", "resources", "code_examples", "demo_code", "subtopic_name"],
      include: [
        {
          model: Users,
          where: {
            id: userID,
          },
        },
      ],
    });
    const subtopics = subtopicData.map((subtopic) => {
      const user = subtopic.users[0].subtopicStatus;
      return {
        id: subtopic.id,
        status_id: user.id,
        status: user.status,
        name: subtopic.subtopic_name,
        description: subtopic.description,
        resources: subtopic.resources,
        code_examples: subtopic.code_examples,
        demo_code: subtopic.demo_code,
      };
    });
    res.status(200).render("subtopic", {
      subtopics,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const subtopicsData = await Subtopics.findByPk(req.params.id);

    const subtopics = subtopicsData.get({ plain: true });

    res.render("subtopicDetails", subtopics);
  } catch (err) {
    res.status(500).json(err);
  }
});
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
