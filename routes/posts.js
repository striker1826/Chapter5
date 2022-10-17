const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");

const PostsController = require("../controller/posts.controller");
const postsController = new PostsController();

// 게시글 생성
router.post("/post", authMiddleware, postsController.createPost);
// 게시글 조회
router.get('/', postsController.getPosts);
// 게시글 상세조회
router.get('/:postId', postsController.getPostById);
// 게시글 수정
router.patch("/:postId", authMiddleware, postsController.updatepost);
// 게시글 삭제
router.delete("/:postId", authMiddleware, postsController.deletepost);

module.exports = router;
