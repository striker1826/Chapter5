const { Posts } = require("../models");

class PostsRepository {
  // 게시판 생성
  createPost = async (userNum, title, content) => {
    const createPostData = await Posts.create({ userNum, title, content });

    return createPostData;
  };

  // 게시판 조회

  // 게시판 수정
  updatePost = async (titleId, title, content) => {
    const updatePost = Posts.update(
      { titleId, title, content },
      { where: { id: titleId } }
    );
    return updatePost;
  };

  // 게시판 삭제
  deletePost = async (titleId) => {
    const deletePost = Posts.delete({ id: titleId });
    return deletePost;
  };
}

module.exports = PostsRepository;
