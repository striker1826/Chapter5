const CommentService = require("../service/comments.service");

class CommentsController {
  commentService = new CommentService();

  createComment = async (req, res, next) => {
    const { comment } = req.params;
    await this.commentService.createComment(comment);
    return;
  };
}

module.exports = CommentsController;
