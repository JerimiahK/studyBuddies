const User = require("../models");

const userData = [
  {
    "user_name": "Jerimiah",
    "email": "jerimiah@gmail.com",
    "password": "password",
  },
  {
    "user_name": "Christian",
    "email": "christian@gmail.com",
    "password": "password2",
  },
  {
    "user_name": "Drew",
    "email": "drew@gmail.com",
    "password": "password3",
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
