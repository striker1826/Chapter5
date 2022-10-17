"use strict";
const { Model } = require("DataTypes");
module.exports = (DataTypes, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comments.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      postNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      commentNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isIn: [[1, 2]],
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      DataTypes,
      modelName: "Comments",
    }
  );
  return Comments;
};
