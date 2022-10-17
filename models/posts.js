"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posts.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userNum: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );

  Posts.associate = function (models) {
    models.Posts.belongsTo(models.Members, {
      onDelete: 'cacade',
      forignKey: {
        allowNull: true,
      }
    })
  };

  return Posts;
};
