const comments = require("../migrations/comments");
const CommentsRepository = require("../repository/comments.repository");

class CommentsService {
  commentsRepository = new CommentsRepository();

  createComment = async (postNum, userNum, level, commentId, comment) => {
    await this.commentsRepository.createComment(
      postNum,
      userNum,
      level,
      commentId,
      comment
    );
    return;
  };

  // createRecomment = async (postId, id, level, commentId, comment) => {
  //   const createRecomment = await this.commentsRepository.createRecomment(
  //     postId,
  //     id,
  //     level,
  //     commentId,
  //     comment
  //   );
  //   return createRecomment;
  // };

  updateComment = async (commentId, userNum, comment) => {
    await this.commentsRepository.updateComment(postNum, userNum, comment);
    return;
  };

  deleteComment = async (commentId, userNum) => {
    const findOneComment = await this.commentsRepository.findOneComment(commentId);
    if(findOneComment.level === 1) {      
      await this.commentsRepository.deleteComment(commentId, userNum);
      await this.commentsRepository.deleteReCommentCasCade(commentId);
    } else {
      await this.commentsRepository.deleteComment(commentId, userNum);
    }
    return findOneComment;
  };
}

module.exports = CommentsService;
