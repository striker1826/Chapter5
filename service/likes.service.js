const LikesRepository = require("../repository/likes.repository");
const PostsRepository = require("../repository/posts.repository");
const { Posts } = require("../models");
class LikesService {
  likesRepository = new LikesRepository();
  postsRepository = new PostsRepository();

  updateLike = async (postNum, userNum) => {
    const currentLike = await this.likesRepository.findLikeOne(
      postNum,
      userNum
    );

    if (!currentLike) {
      await this.likesRepository.likeIncrement(postNum, userNum);
      await this.postsRepository.postLikeIncrement(postNum);
      return { message: "게시글에 좋아요를 등록했습니다." };
    } else {
      await this.likesRepository.likeDecrement(postNum, userNum);
      await this.postsRepository.postLikeDecrement(postNum);
      return { message: "게시글에 좋아요를 취소했습니다." };
    }
  };
  
  getAllLikePosts = async (userId) => {
    const myLikeArr = await this.likesRepository.getAllLikePosts(userId);
    let myLikeList = myLikeArr.sort((a, b) => b.createdAt - a.createdAt);
    return myLikeList;
  };
}

module.exports = LikesService;
