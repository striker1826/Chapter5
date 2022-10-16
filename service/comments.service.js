const comments = require("../migrations/comments");
const CommentsRepository = require("../repository/comments.repository");

class CommentsService {
  CommentsRepository = new CommentsRepository();

  createComment = async (postNum, userNum, level, commentId, comment) => {
    await this.CommentsRepository.createComment(
      postNum,
      userNum,
      level,
      commentId,
      comment
    );
    return;
  };

  // createRecomment = async (postId, id, level, commentId, comment) => {
  //   const createRecomment = await this.CommentsRepository.createRecomment(
  //     postId,
  //     id,
  //     level,
  //     commentId,
  //     comment
  //   );
  //   return createRecomment;
  // };

  updateComment = async (postNum, userNum, comment) => {
    await this.CommentsRepository.updateComment(postNum, userNum, comment);
    return;
  };

  deleteComment = async (postNum, userNum) => {
    await this.CommentsRepository.deleteComment(postNum, userNum);
    return;
  };
}

module.exports = CommentsService;
