const comments = require("../migrations/comments");
const CommentsRepository = require("../repository/comments.repository");

class CommentsService {
  CommentsRepository = new CommentsRepository();

  createComment = async (comment) => {
    await this.CommentsRepository.createComment(comment);
    return;
  };
}

module.exports = CommentsService;
