const express = require("express");
const router = express.Router();
const CommentsController = require("../controller/comments.controller");
const commentsController = new CommentsController();
const authMiddleware = require("../middlewares/auth-middleware");

router.post("/:postId", authMiddleware, commentsController.createComment);
router.patch("/:postId", authMiddleware, commentsController.updateComment);
router.delete("/:postId", authMiddleware, commentsController.deleteComment);

module.exports = router;
