const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");

const LikesController = require("../controller/likes.controller");
const likesController = new LikesController();

// 게시글 좋아요
router.put("/post/:postId", authMiddleware, likesController.likePost);


module.exports = router;
