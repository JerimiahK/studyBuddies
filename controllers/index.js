// Creating Express Routers
const router = require("express").Router();

// Requiring in routes
const apiRoutes = require("./api");
// const homeRoutes = require(""); // set up home routes later
const userRoutes = require("./api/user-routes");

// Route prefixes
router.use("/", userRoutes);
router.use("/api", apiRoutes);

// Exporting Routes
module.exports = router;
