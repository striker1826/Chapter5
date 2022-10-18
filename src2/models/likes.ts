// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class Likes extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of DataTypes lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Likes.init(
//     {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//       },
//       postNum: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       userNum: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       createdAt: {
//         allowNull: false,
//         type: DataTypes.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: DataTypes.DATE,
//       },
//     },
//     {
//       sequelize,
//       modelName: "Likes",
//     }
//   );
//   return Likes;
// };
