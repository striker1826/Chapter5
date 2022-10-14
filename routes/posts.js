const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

const PostsController = require("../controller/posts.controller");
const postsController = new PostsController();

// 게시판 생성

// 게시판 조회

// 게시판 수정
router.post("postId", authMiddleware, postsController.updatepost);
// 게시판 삭제
router.post("postId", authMiddleware, postsController.deletepost);

module.exports = router;
