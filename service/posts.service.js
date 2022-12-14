const PostsRepository = require("../repository/posts.repository");
const CommentsRepository = require("../repository/comments.repository");
const comments = require("../migrations/comments");

class PostsService {
  postsRepository = new PostsRepository();
  commentsRepository = new CommentsRepository();

  // 게시글 생성
  createPost = async (id, title, content) => {
    const createPostData = await this.postsRepository.createPost(
      id,
      title,
      content
    );

    return {
      userNum: createPostData.id,
      title: createPostData.title,
      content: createPostData.content,
      createdAt: createPostData.createdAt,
      updatedAt: createPostData.updatedAt,
    };
  };

  // 게시글 조회
  findAllPost = async () => {
    const allPost = await this.postsRepository.findAllPost();
    const allPostSort = allPost.sort((a, b) => b.id - a.id);

    return allPostSort;
  };

  // 게시글 상세 조회
  findPostById = async (postId) => {
    const findPost = await this.postsRepository.findPostById(postId);
    const findComments = await this.commentsRepository.getAllCommentsWithLevel(
      postId,
      1
    );

    // 대댓글 추출
    const reComments = [];
    findComments.map((comment) => {
      comment.level === 2 ? reComments.push(comment) : false;
    });

    for (let i = 0; i < findComments.length; i++) {
      findComments[i].id === reComments;
    }

    const findRecomments =
      await this.commentsRepository.getAllCommentsWithLevel(postId, 2);

    let commentsInFindPost = [];
    for (let i = 0; i < findComments.length; i++) {
      const reComment = [];
      for (let j = 0; j < findRecomments.length; j++) {
        if (findComments[i].id === findRecomments[j].commentNum) {
          reComment.push(findRecomments[j]);
        }
      }
      commentsInFindPost.push({
        id: findComments[i].id,
        postNum: findComments[i].postNum,
        commentNum: findComments[i].commentNum,
        userNum: findComments[i].userNum,
        comment: findComments[i].comment,
        level: findComments[i].level,
        createdAt: findComments[i].createdAt,
        updatedAt: findComments[i].updatedAt,
        child: reComment,
      });
    }

    const results = {
      findPost,
      commentsInFindPost,
    };
    return results;
  };

  // 게시글 수정
  updatePost = async (postId, title, content, id) => {
    console.log(postId, title, content, id);
    try {
      await this.postsRepository.updatePost(postId, title, content, id);
      return {
        id: updatePost.postId,
        title: updatePost.title,
        content: updatePost.content,
        userNum: updatePost.id,
      };
    } catch (e) {
      return {
        message: "게시글 수정에 실패했습니다",
        status: 400,
      };
    }
  };

  // 게시글 삭제
  deletePost = async (postId, id) => {
    try {
      const deletePost = await this.postsRepository.deletePost(postId, id);
      return {
        id: deletePost.postId,
      };
    } catch (e) {
      return {
        message: "게시글 작성에 실패했습니다",
        status: 400,
      };
    }
  };

  // 게시글 좋아요
  // likePost = async (postNum, userNum) => {
  //   return this.postsRepository.likePost;
  // };
}

module.exports = PostsService;
