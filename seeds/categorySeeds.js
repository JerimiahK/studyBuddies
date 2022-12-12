const Category = require("../models/Categories");

const categoryData = [
  {
    category_name: "HTML",
  },
  {
    category_name: "CSS",
  },
  {
    category_name: "JavaScript",
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
