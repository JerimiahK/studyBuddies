const sequelize = require("../config/connection");
const seedUsers = require("./userSeeds.js");
const seedTopics = require("./topicSeeds.js");
const seedSubtopic = require("./subtopicSeeds.js");
const seedCategory = require("./categorySeeds.js");
console.log(seedCategory);
console.log(seedSubtopic);

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedCategory();
  await seedTopics();
  await seedSubtopic();

  process.exit(0);
};
seedAll();
