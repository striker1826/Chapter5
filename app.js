require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = 3000;
const { index } = require("./routes");

app.use(express.json());
app.use(cookieParser());

app.use("/", index);

app.use("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, (req, res) => {
  console.log(`${port}번으로 열렸습니다`);
});
