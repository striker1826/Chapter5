const express = require("express");
const router = express.Router();
const commentsCroller = require("../controller/comments.controller");

router.post("/:postId", commentsCroller);
router.patch("/:commentId", commentsCroller);

module.exports = router;
