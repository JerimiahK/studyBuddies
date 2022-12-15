const router = require("express").Router();
const User = require("../../models/User");
// const { json } = require("sequelize");

// http://localhost:3001/api/user
// Get all Users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) =>
      user.get({
        plain: true,
        individualHooks: true,
      })
    );
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user login
// http://localhost:3001/api/user/login
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
router.get("/sign-up", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("sign-up");
});

// Create New User
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post for Login
router.post("/login", async (req, res) => {
  console.log(req);
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    // console.log(userData);

    if (!userData) {
      res.status(400).json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password, please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      console.log("🚀 ~ file: user-routes.js ~ line 65 ~ req.session.save ~ req.session.cookie", req.session.cookie);

      res.status(200).json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post for Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;



