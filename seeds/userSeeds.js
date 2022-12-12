const User = require("../models/User");

const userData = [
  {
    user_name: "Jerimiah",
    email: "jerimiah@gmail.com",
    password: "password",
  },
  {
    user_name: "Christian",
    email: "christian@gmail.com",
    password: "password2",
  },
  {
    user_name: "Drew",
    email: "drew@gmail.com",
    password: "password3",
  },
];

const seedUsers = async () => {
  for (const user of userData) {
    await User.create(user);
  }
};
module.exports = seedUsers;
