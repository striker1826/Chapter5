const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");

const PostsController = require("../controller/posts.controller");
const postsController = new PostsController();

// 게시판 생성
router.post("/", authMiddleware, postsController.createPost);
// 게시판 조회
router.get("/", postsController.getPosts);
// 게시판 상세조회
router.get("/:postId", postsController.getPostById);
// 게시판 수정
router.patch("/:postId", authMiddleware, postsController.updatepost);
// 게시판 삭제
router.delete("/:postId", authMiddleware, postsController.deletepost);

router.put("/:postId", authMiddleware);

module.exports = router;
