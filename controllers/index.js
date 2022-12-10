const router = require("express").Router();

const apiRoutes = require("./api");
// const homeRoutes = require(""); // set up home routes later
const userRoutes = require("./api");

router.use("/", userRoutes);
router.use("/api", apiRoutes);


module.exports = router;
