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

  deleteComment = async (postNum, userNum) => {
    try {
      await Comments.destroy({ where: { postNum, userNum } });
      return;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  getAllComments = async (postNum) => {
    try {
      const test = await Comments.findAll({ where: { postNum } });
      return test;
    } catch (err) {
      throw new Error(err.message);
    }
  };
}

module.exports = CommentsRepository;
