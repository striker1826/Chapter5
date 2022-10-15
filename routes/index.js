const express = require("express");
const router = express.Router();

const membersRouter = require("./members");
const postsRouter = require("./posts");
const commentsRotuer = require("./comments");
const likesRouter = require("./likes");

router.use("/comments", commentsRotuer);
router.use("/members", membersRouter);
router.use("/posts", postsRouter);
router.use("/likes", likesRouter);

module.exports = router;
