const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Subtopic extends Model {
  // 1. ID
  // 2. subtopic_name (ex. media quires)
  // 3. description
  // 4. code_examples
  // 5. demo_code ????
  // 6. resources
}

Subtopic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code_examples: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    demo_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resources: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "subtopic",
  }
);

module.exports = Subtopic;
