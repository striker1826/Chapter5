
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = 3000;
require("dotenv").config();
const routes = require("./routes");

app.use(express.json());
app.use(cookieParser());

app.use('/', routes);

app.use("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, (req, res) => {
  console.log(`${port}번으로 열렸습니다`);
});
