const router = require("express").Router();
const User = require("../../models/User");

// Create New User
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
    });

    // req.session.save(() => {
    //   req.session.loggedIn = true;
    // });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post for Login

// router.post for Logout

module.exports = router;
