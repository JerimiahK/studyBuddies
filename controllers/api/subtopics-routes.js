// Subtopics Routes
const router = require("express").Router();
const { Subtopics, Topics, SubtopicStatus, Users } = require("../../models/");

// http:localhost:3001/api/subtopics
//GET
// router.get("/", async (req, res) => {
//   try {
//     const subtopicsData = await Subtopics.findAll({
//       include: [{ model: Topics }],
//     });
//     res.status(200).json(subtopicsData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// /:topic_id
// where: {topic_id : res.params.id},
// attributes: ["topic_id"],
// where: { topic_id: topic_id },
// topic_id: res.topic_id,

//How can we search our database to find all subtopics with a topic_id that matches the card being clicked on???

//We have an id from an e.currentTarget, we want to take that ID and query against are database to find all subtopics with a topic_id = to the currentTarget.id

router.get("/", async (req, res) => {
  const topicID = req.query.id;
  // const currentUser = req.session.id;
  const userID = 1;
  // const currentUser = await Users.findByPk(userID);

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
      // through: {
      //   attributes: [],
      // },

      // include: Users,
    });
    // For subtopics status : id, status,
    // ["id", "description", "resources", "code_examples", "demo_code"],
    const subtopics = subtopicData.map((subtopic) => {
      const user = subtopic.users[0].subtopicStatus;
      // return user.subtopicStatus.map(({ id, subtopic_id, status }) => {
      //   return {
      //     id,
      //     subtopic_id,
      //     status,
      //   };
      // });
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

    console.log("=======================");
    // console.log(subtopicData[0].users[0].subtopicStatus);
    console.log(subtopics);
    console.log("=======================");
    res.status(200).render("subtopic", { subtopics });
  } catch (err) {
    console.log(err);
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
