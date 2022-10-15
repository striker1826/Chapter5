const CommentService = require("../service/comments.service");

class CommentsController {
  commentService = new CommentService();

  createComment = async (req, res, next) => {
    const { postId } = req.params;
    const { comment } = req.body;
    const { id } = res.locals.user;
    await this.commentService.createComment(postId, id, comment);
    res.status(200).send("댓글이 생성되었습니다");
  };

  updateComment = async (req, res, next) => {
    try {
      const { postId } = req.params;
      const { comment } = req.body;
      const { id } = res.locals.user;
      await this.commentService.updateComment(postId, id, comment);
      res.status(200).send("댓글이 수정되었습니다");
    } catch (err) {
      res.status(400).send("입력한 정보값이 올바른지 확인해 주세요");
    }
  };

  deleteComment = async (req, res, next) => {
    try {
      const { postId } = req.params;
      const { id } = res.locals.user;
      await this.commentService.deleteComment(postId, id);
      res.status(200).send("댓글이 삭제되었습니다");
    } catch (err) {
      res.status(400).send("입력한 정보값이 올바른지 확인해 주세요");
    }
  };
}

module.exports = CommentsController;
