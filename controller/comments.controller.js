const CommentService = require("../service/comments.service");

class CommentsController {
  commentService = new CommentService();

  createComment = async (req, res, next) => {
    const { postNum } = req.params;
    const { comment } = req.body;
    const { userNum } = res.locals.user;
    await this.commentService.createComment(postNum, comment, userNum);
    res.status(200).send("댓글이 생성되었습니다");
  };
}

module.exports = CommentsController;
