import { QueryInterface, Sequelize, Options } from "sequelize";

class options implements Options{
   dialect!: 'mysql';
   username!: string
   password!: string;
}        

const createDBOptions = new options();
createDBOptions.username = "alstjq123579"
createDBOptions.password = "Rwin1358!"
createDBOptions.dialect = 'mysql';

let db_name = "제발 한번만 연결해 주세요";

const dbCreateSequelize = new Sequelize(createDBOptions);

console.log(`======Create DataBase : ${db_name}======`);

dbCreateSequelize.getQueryInterface().createDatabase(db_name)
.then(() => {
   console.log("✅db create success!");
})
.catch((e) => {
   console.log("❗️error in create db : ", e);
})