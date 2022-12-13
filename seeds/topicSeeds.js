const Topics = require("../models/Topics");

const topicData = [
  {
    topic_name: "Javascript",
    category_id: 1,
  },
  {
    topic_name: "Web API's",
    category_id: 2,
  },
  {
    topic_name: "CSS",
    category_id: 1,
  },
];

const seedTopics = () => Topics.bulkCreate(topicData);

module.exports = seedTopics;
