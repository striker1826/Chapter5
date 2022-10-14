const PostsService = require("../service/posts.service");

class PostsController {
  PostsService = new PostsService();

  // 게시판 생성
  createPost = async (req, res, next) => {
    console.log("@@@@@@@@@@@@@@", res.locals.user);
    const { id } = res.locals.user;
    const { title, content } = req.body;

    const createPostData = await this.PostsService.createPost( id, title, content );

    res.status(201).json({ message: "게시글이 생성되었습니다." });
  };

  // 게시판 조회
  getPosts = async (req, res, next) => {
    const posts = await this.PostsService.findAllPost();

    res.status(200).json({ data: posts });
  };

  // 게시판 수정
  updatepost = async (req, res, next) => {
    const { title, content } = req.body;
    const { titleId } = req.params;
    await this.PostsService.updatePost(titleId, title, content);
    res.status(200).send("게시글이 수정되었습니다");
  };

  // 게시판 삭제
  deletepost = async (req, res, next) => {
    const { titleId } = req.params;
    await this.PostsService.deletePost(titleId);
    res.status(200).send("게시글이 삭제되었습니다");
  };
}

module.exports = PostsController;
