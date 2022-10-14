const { Posts, sequelize } = require("../models");

class PostsRepository {
  // 게시판 생성
  createPost = async (id, title, content) => {
    const createPost = await Posts.create({ userNum: id, title, content });

    return createPost;
  };

  // 게시판 조회
  findAllPost = async () => {
    // const allPost = await Posts.findAll();
    const [ posts ] = await sequelize.query("SELECT p.id, m.nickname, p.title, p.content, p.like, p.createdAt, p.updatedAt FROM Posts p INNER JOIN Members m ON p.userNum = m.id");

    return posts;
  }

  // 게시판 수정
  updatePost = async (postId, title, content, id) => {
    console.log("repo: ", postId, title, content, id);
    const updatePost = Posts.update(
      { title, content },
      { where: { id: postId, userNum: id } }
    );
    return updatePost;
  };

  // 게시판 삭제
  deletePost = async (postId, id) => {
    console.log("repo: ", postId);
    const deletePost = Posts.destroy({
      where: { id: postId, userNum: id },
    });
    return deletePost;
  };
}

module.exports = PostsRepository;
