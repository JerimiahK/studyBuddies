const Subtopics = require("../models/Subtopics");

const subtopicData = [
  {
    description: "This is a description explaining the subtopic.",
    code_examples: "This is where code examples will go for the subtopic",
    demo_code: "This is where code demos will go for the subtopic",
    resources:
      "This is where any resources (links, docs, etc) with go for the subtopic.",
    topic_id: 1,
  },
];

const seedTopics = () => Subtopics.bulkCreate(subtopicData);

module.exports = seedTopics;
