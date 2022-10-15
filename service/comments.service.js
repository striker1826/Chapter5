const comments = require("../migrations/comments");
const CommentsRepository = require("../repository/comments.repository");

class CommentsService {
  CommentsRepository = new CommentsRepository();

  createComment = async (postNum, userNum, comment) => {
    await this.CommentsRepository.createComment(postNum, userNum, comment);
    return;
  };

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
