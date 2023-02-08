const router = require("express").Router();

const userRoutes = require("./user-routes");
const topicRoutes = require("./topics-routes");
const categoryRoutes = require("./categories-routes");
const subtopicRoutes = require("./subtopics-routes");

router.use("/users", userRoutes);
router.use("/topics", topicRoutes);
router.use("/categories", categoryRoutes);
router.use("/subtopics", subtopicRoutes);

module.exports = router;
