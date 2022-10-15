const comments = require("../migrations/comments");
const CommentsRepository = require("../repository/comments.repository");

class CommentsService {
  CommentsRepository = new CommentsRepository();

  createComment = async (postNum, userNum, comment) => {
    await this.CommentsRepository.createComment(postNum, userNum, comment);
    return;
  };
}

module.exports = CommentsService;
