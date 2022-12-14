// Creating Express Routers
const router = require("express").Router();

// Requiring in routes
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const userRoutes = require("./api/user-routes");
// const { route } = require("./api/user-routes");

// Route prefixes
router.use("/", homeRoutes);
router.use("/user", userRoutes);
router.use("/api", apiRoutes);

// Exporting Routes
module.exports = router;
