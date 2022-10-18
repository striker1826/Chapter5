import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize('mysql://database-1.czzfpqy3oobx.ap-northeast-2.rds.amazonaws.com/제발한번만되게해주세요ㅠㅠ');
class Members extends Model {
  public id!: number;
  public userId!: number;
  public nickname!: string;
  public password!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Members.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nickname : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password : {
    type: DataTypes.STRING,
    allowNull: false,
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
    tableName: 'Members',
    sequelize: sequelize,
  }
)

export default Members