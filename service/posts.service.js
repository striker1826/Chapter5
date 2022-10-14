const postsRepository = require("../repository/posts.repository");
class PostsService {
  postsRepository = new postsRepository();

  // 게시판 생성

  // 게시판 조회

  // 게시판 수정
  updatePost = async (titleId, title, content) => {
    try {
      const updatePost = await this.postsRepository.update(
        titleId,
        title,
        content
      );
      return {
        id: updatePost.title,
        title: updatePost.titlem,
        content: updatePost.content,
      };
    } catch (e) {
      return {
        message: "게시글 수정에 실패했습니다",
        status: 400,
      };
    }
  };
  // 게시판 삭제
  deletePost = async (titleId) => {
    try {
      const deletePost = await this.postsRepository.delete(titleId);
      return {
        id: deletePost.title,
      };
    } catch (e) {
      return {
        message: "게시글 작성에 실패했습니다",
        status: 400,
      };
    }
  };
}

module.exports = PostsService;
