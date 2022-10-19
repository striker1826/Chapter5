const { error } = require("console");
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
      const existComment = await this.commentsRepository.findOneComment(
        commentId
      );
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

  updateComment = async (commentId, userNum, comment, level) => {
    if (!comment) {
      throw new Error("댓글 내용을 입력해 주세요");
    }
    if (level) {
      throw new Error("레벨값은 입력할 수 없습니다");
    }
    
    const findOneComment = await this.commentsRepository.findOneComment(commentId, userNum);
    

    if(!findOneComment) {
      throw new Error("존재하지 않는 댓글입니다.");
    } else {
      await this.commentsRepository.updateComment(commentId, userNum, comment);
      return;
    }
  };

  deleteComment = async (commentId, userNum) => {
    const findOneComment = await this.commentsRepository.findOneComment(
      commentId,
      userNum
    );
    if (!findOneComment) {
      throw new Error("존재하지 않는 댓글입니다.");
    }
    try {
      if (findOneComment.level === 1) {
        await this.commentsRepository.deleteComment(commentId, userNum);
        await this.commentsRepository.deleteReCommentCasCade(
          commentId,
          userNum
        );
      } else {
        await this.commentsRepository.deleteComment(commentId, userNum);
      }
      return findOneComment;
    } catch (err) {
      throw Error(err);
    }
  };
}

module.exports = CommentsService;
