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



  // 게시판 수정



// 게시판 삭제



  
}

module.exports = PostsController;
