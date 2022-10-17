import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize('mysql://database-1.czzfpqy3oobx.ap-northeast-2.rds.amazonaws.com/한번만ㅠㅠ');
class Posts extends Model {
  public id!: number;
  public userNum!: number;
  public title!: string;
  public content!: string;
  public likes!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Posts.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userNum : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likes : {
    type: DataTypes.INTEGER,
  },
  createdAt : {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt : {
    type: DataTypes.DATE,
    allowNull: false,
  }
},{
    tableName: 'Posts',
    sequelize: sequelize,
  }
)

export default Posts