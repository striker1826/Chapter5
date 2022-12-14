const PostsService = require("../service/posts.service");

class PostsController {
  PostsService = new PostsService();

  // 게시판 생성
  createPost = async (req, res, next) => {
    const { id } = res.locals.user;
    const { title, content } = req.body;

    await this.PostsService.createPost(id, title, content);

    res.status(201).json({ message: "게시글이 생성되었습니다." });
  };

  // 게시판 조회
  getPosts = async (req, res, next) => {
    const posts = await this.PostsService.findAllPost();

    res.status(200).send(posts);
  };

  // 게시판 상세 조회
  getPostById = async (req, res, next) => {
    const { postId } = req.params;
    const findPost = await this.PostsService.findPostById(postId);
    res.status(200).send(findPost);
  };

  // 게시판 수정
  updatepost = async (req, res, next) => {
    const { title, content } = req.body;
    const { postId } = req.params;
    const { id } = res.locals.user;
    console.log("cont:", title, content, postId, id);
    await this.PostsService.updatePost(postId, title, content, id);
    res.status(200).send("게시글이 수정되었습니다");
  };

  // 게시판 삭제
  deletepost = async (req, res, next) => {
    const { postId } = req.params;
    const { id } = res.locals.user;
    console.log("cont:", postId);
    await this.PostsService.deletePost(postId, id);
    res.status(200).send("게시글이 삭제되었습니다");
  };

  // 게시글 좋아요
  // likePost = async (req, res, next) => {
  //   const { postId } = req.params;
  //   const { id } = res.locals.user;
  //   await this.PostsService.likePost(postId, id);
  // };
}
module.exports = PostsController;
