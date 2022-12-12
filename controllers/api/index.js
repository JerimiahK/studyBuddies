const router = require("express").Router();

// Require in routes : subtopics-routes, topics-routes, categories-routes.
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
// Create prefixes for : subtopicRoutes, topicRoutes, categoriesRoutes.

module.exports = router;
