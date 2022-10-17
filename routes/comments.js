const express = require("express");
const router = express.Router();
const CommentsController = require("../controller/comments.controller");
const commentsController = new CommentsController();
const authMiddleware = require("../middlewares/auth-middleware");

router.post("/:postId", authMiddleware, commentsController.createComment);

router.post(
  "/:postId/:commentId",
  authMiddleware,
  commentsController.createComment
);

router.patch("/:commentId", authMiddleware, commentsController.updateComment);
router.delete("/:commentId", authMiddleware, commentsController.deleteComment);

module.exports = router;
