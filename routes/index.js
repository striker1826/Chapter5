const express = require("express");
const router = express.Router();
const membersRouter = require("./members");
// const loginRouter = require("./login");
const postsRouter = require("./posts");
const commentsRouter = require("./comments");
// const commentsRotuer = require("./comments");
// const likesRouter = require("./likes");
router.use("/comments", commentsRouter);
router.use("/members", membersRouter);
// router.use("/login", loginRouter);
// router.use("/posts", likesRouter);
router.use("/posts", postsRouter);
// router.use("/comments", commentsRotuer);

module.exports = router;
