const comments = require("../migrations/comments");
const CommentsRepository = require("../repository/comments.repository");
const PostsRepository = require("../repository/posts.repository");

class CommentsService {
  commentsRepository = new CommentsRepository();
  postsRepository = new PostsRepository();

  createComment = async (postNum, userNum, level, commentId, comment) => {
    const existPost = await this.postsRepository.findOnePost(postNum);
    if (!existPost) {
      throw new Error("존재하지 않는 글입니다.");
    }
    if (level === 2) {
      const existComment = await this.commentsRepository.findOneComment(commentId);
      if (!existComment || existComment.commentNum !== 0) {
        throw new Error("존재하지 않는 댓글입니다.");
      }
    }

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
    await this.commentsRepository.updateComment(commentId, userNum, comment);
    return;
  };

  deleteComment = async (commentId, userNum) => {
    const findOneComment = await this.commentsRepository.findOneComment(
      commentId
    );
    if (findOneComment.level === 1) {
      await this.commentsRepository.deleteComment(commentId, userNum);
      await this.commentsRepository.deleteReCommentCasCade(commentId);
    } else {
      await this.commentsRepository.deleteComment(commentId, userNum);
    }
    return findOneComment;
  };
}

module.exports = CommentsService;
