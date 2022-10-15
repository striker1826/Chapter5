const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");

const LikesController = require("../controller/likes.controller");
const likesController = new LikesController();

// 좋아요 게시글 조회
router.get("/posts", authMiddleware, likesController.getAllLikePosts);
// router.get("/posts", console.log("like 라우터"));
// 게시글 좋아요
router.put("/posts/:postId", authMiddleware, likesController.likePost);

module.exports = router;
