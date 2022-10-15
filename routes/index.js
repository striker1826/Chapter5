const express = require("express");
const router = express.Router();

const membersRouter = require("./members");
const postsRouter = require("./posts");
// const commentsRouter = require("./comments");
const commentsRotuer = require("./comments");
// const likesRouter = require("./likes");

router.use("/comments", commentsRotuer);
router.use("/members", membersRouter);
// router.use("/likes", likesRouter);
router.use("/posts", postsRouter);
// router.use("/comments", commentsRotuer);

module.exports = router;
