const { Comments } = require("../models");

class CommentsRepository {
  createComment = async (postNum, userNum, level, commentNum, comment) => {
    await Comments.create({ postNum, userNum, level, commentNum, comment });
    return;
  };

  // createRecomment = async (postNum, userNum, level, commentNum, comment) => {
  //   await Comments.create({ postNum, userNum, level, commentNum, comment });
  //   return;
  // };

  updateComment = async (postNum, userNum, comment) => {
    try {
      await Comments.update({ comment }, { where: { postNum, userNum } });
      return;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  findOneComment = async (id) => {
    const findOneComment = await Comments.findByPk(id);
    console.log("@@@repo:", findOneComment)
    return findOneComment;
  }

  deleteComment = async (id, userNum) => {
    try {
      await Comments.destroy({ where: { id, userNum } });
      return;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  deleteReCommentCasCade = async (commentNum) => {
    try {
      await Comments.destroy({where: {commentNum}});
      return;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  getAllCommentsWithLevel = async (postNum, level) => {
    try {
      const test = await Comments.findAll({ where: { postNum, level } });
      return test;
    } catch (err) {
      throw new Error(err.message);
    }
  };
}

module.exports = CommentsRepository;
