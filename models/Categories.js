// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Category extends Model {}

// Category.init(
//   {
//     // 1. ID
//     // 2. category_name (ex. Css)
//     // 3. subtopic_name (ex. media quires) -> REFERENCES subtopics
//     // 4. ... anything else??????
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     category_name: DataTypes.STRING,
//     subtopic_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "subtopic",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "category",
//   }
// );

// module.exports = Category;
