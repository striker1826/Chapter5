const express = require("express");
const router = express.Router();
const MembersController = require("../controller/members.controllers");
const membersController = new MembersController();

router.post("/signup", membersController.createMembers);
router.post("/login", membersController.loginMembers);
router.patch("/signup", membersController.updateMember);
router.delete("/signup", membersController.deleteMember);

module.exports = router;
