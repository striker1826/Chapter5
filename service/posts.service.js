const postsRepository = require("../repository/posts.repository");

class PostsService {
  postsRepository = new postsRepository();
  
  // 게시판 생성
  createPost = async (id, title, content) => {
    const createPostData = await this.postsRepository.createPost( id, title, content );

    return {
      userNum: createPostData.id,
      title: createPostData.title,
      content: createPostData.content,
      createdAt: createPostData.createdAt,
      updatedAt: createPostData.updatedAt,
    }
  };

  // 게시판 조회



  // 게시판 수정



  // 게시판 삭제




}

module.exports = PostsService;
