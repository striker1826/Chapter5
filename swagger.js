const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "database-1.czzfpqy3oobx.ap-northeast-2.rds.amazonaws.com",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
