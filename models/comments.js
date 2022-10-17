"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comments.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      postNum: DataTypes.INTEGER,
      commentNum: DataTypes.INTEGER,
      userNum: DataTypes.INTEGER,
      comment: DataTypes.STRING,
      level: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comments",
    }
  );

  Comments.associate = function (models) {
    models.Comments.belongsTo(models.Members, {
      onDelete: 'cacade',
      forignKey: {
        allowNull: true,
      }
    })
  };
  return Comments;
};
