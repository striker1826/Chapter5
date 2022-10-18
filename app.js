const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output");
const app = express();
const cookieParser = require("cookie-parser");
const port = 3000;
require("dotenv").config();
const routes = require("./routes");

app.use(express.json());
app.use(cookieParser());

//Swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, { explorer: true })
);

app.use("/", routes);

app.use("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, (req, res) => {
  console.log(`${port}번으로 열렸습니다`);
});
// git test
