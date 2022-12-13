const Topics = require("../models/Topics");

const topicData = [
  {
    topic_name: "Javascript",
  },
  {
    topic_name: "Web API's",
  },
  {
    topic_name: "CSS",
  },
];

const seedTopics = () => Topics.bulkCreate(topicData);

module.exports = seedTopics;
