const { Topics } = require("../models");

const topicData = [
  {
    "topic_name": "Javascript",
    "category_id": "",
  },
  {
    "topic_name": "HTML",
    "category_id": "",
  },
  {
    "topic_name": "CSS",
    "category_id": "",
  },
];

const seedTopics = () => Topics.bulkCreate(topicData);

module.export = seedTopics;
