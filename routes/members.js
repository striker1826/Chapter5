const express = require("express");
const router = express.Router();
// const MembersController = require("../controller/members.controllers");
// const membersController = new MembersController();

// router.post("/signup", membersController);

router.post("/login", (req, res) => {
  res.send("login");
});

module.exports = router;
