const PostsRepository = require("../repository/posts.repository");

class PostsService {
  postsRepository = new PostsRepository();

  // 게시판 생성
  createPost = async (id, title, content) => {
    const createPostData = await this.postsRepository.createPost( id, title, content );

    return {
      userNum: createPostData.id,
      title: createPostData.title,
      content: createPostData.content,
      createdAt: createPostData.createdAt,
      updatedAt: createPostData.updatedAt,
    }
  };

  // 게시판 조회
  findAllPost = async () => {
    const allPost = await this.postsRepository.findAllPost();

    allPost.sort((a, b) => {
      return b.createdAt - a.createdAt;
    })

    return allPost.map((post) => {
      return {
        id: post.id,
        nickname: post.nickname,
        title: post.title,
        likes: post.likes || 0,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      }
    });
  };

  // 게시판 수정
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
  // 게시판 삭제
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
}

module.exports = PostsService;
