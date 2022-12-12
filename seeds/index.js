const sequelize = require("../config/connection");
const User = require("../models/User");
const userData = require("./userSeeds.json");
// const topicData = require("./topicSeeds.json");
// const subtopicData = require("./subtopicSeeds.json");
// const categoryData = require("./categorySeeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
