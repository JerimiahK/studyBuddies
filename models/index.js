const Categories = require("./Categories");
const Topics = require("./Topics");
const Subtopics = require("./Subtopics");

// Categories has many Topics via the 'category_id' foreign key.
Categories.hasMany(Topics, {
  foreignKey: "category_id",
});

// Topics belongs to Categories via the 'category_id' foreign key.
Topics.belongsTo(Categories, {
  foreignKey: "category_id",
});

// Subtopics belongs to Topics via the 'topic_id' foreign key.
Subtopics.belongsTo(Topics, {
  foreignKey: "topic_id",
});

// Topics has many Subtopics via the 'topic_id' foreign key.
Topics.hasMany(Subtopics, {
  foreignKey: "topic_id",
});

module.exports = {
  Categories,
  Topics,
  Subtopics,
};
