const CommentService = require("../service/comments.service");

class CommentsController {
  commentService = new CommentService();

  createComment = async (req, res, next) => {
    const { postId, commentId } = req.params;
    const { comment, level } = req.body;
    const { id } = res.locals.user;
<<<<<<< HEAD
    if (!1 <= level || !2 >= level) {
      res.status(400).send("입력이 올바른지 확인해 주세요");
    }
    if (!comment) {
      res.status(400).send("댓글 내용을 입력해 주세요");
    }

    await this.commentService.createComment(
      postId,
      id,
      level,
      commentId,
      comment
    );
    if (!commentId) {
      res.status(200).send("댓글이 생성되었습니다");
    } else {
      res.status(200).send("대댓글이 생성되었습니다");
=======
    try {
      if (1 > level || 2 < level) {
        return res.status(400).send("입력이 올바른지 확인해 주세요");
      }
      if (!comment) {
        return res.status(400).send("댓글 내용을 입력해 주세요");
      }
      await this.commentService.createComment(
        postId,
        id,
        level,
        commentId,
        comment
      );
      if (!commentId) {
        res.status(200).send("댓글이 생성되었습니다");
      } else {
        res.status(200).send("대댓글이 생성되었습니다");
      }
    } catch (e) {
      res.json(e.message);
>>>>>>> 9b015274ae8f75372e8f89b811697e58e4271bc2
    }
  };

  // 대댓글
  // createRecomment = async (req, res, next) => {
  //   const { postId, commentId } = req.params;
  //   const { level, comment } = req.body;
  //   const { id } = res.locals.user;
  //   await this.commentService.createRecomment(
  //     postId,
  //     id,
  //     level,
  //     commentId,
  //     comment
  //   );
  //   res.status(200).send("대댓글이 생성되었습니다");
  // };

  updateComment = async (req, res, next) => {
    try {
      const { commentId } = req.params;
      const { comment } = req.body;
      const { id } = res.locals.user;
      await this.commentService.updateComment(commentId, id, comment);
      res.status(200).send("댓글이 수정되었습니다");
    } catch (err) {
      res.status(400).send("입력한 정보값이 올바른지 확인해 주세요");
    }
  };

  deleteComment = async (req, res, next) => {
    // try {
    const { commentId } = req.params;
    const { id } = res.locals.user;
    const findOne = await this.commentService.deleteComment(commentId, id);
    res.status(200).send("댓글이 삭제되었습니다");
    // } catch (err) {
    //   throw new Error(err.message);
    // }
  };
}

module.exports = CommentsController;
