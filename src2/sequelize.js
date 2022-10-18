const sequelize = new Sequelize.Sequelize(databaseName, username, password, {
  host: "database-1.czzfpqy3oobx.ap-northeast-2.rds.amazonaws.com",
  dialect: "mysql",
  port,
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    freezeTableName: true,
  },
  logQueryParameters: process.env.NODE_ENV === "development",
  logging: (query, time) => {
    logger.info(time + "ms" + " " + query);
  },
});

sequelize.authenticate();
