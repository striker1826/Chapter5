const { Comments } = require("../models");

class CommentsRepository {
  createComment = async (postNum, userNum, comment) => {
    await Comments.create({ postNum, userNum, comment });
    return;
  };

  updateComment = async (postNum, userNum, comment) => {
    try {
      await Comments.update({ comment }, { where: { postNum, userNum } });
      return;
    } catch (err) {
      res.status(400).send("게시글 수정에 실패했습니다");
    }
  };

  deleteComment = async (postNum, userNum) => {
    try {
      await Comments.destroy({ where: { postNum, userNum } });
      return;
    } catch (err) {
      res.status(400).send("게시글 삭제에 실패했습니다");
    }
  };
}

module.exports = CommentsRepository;
