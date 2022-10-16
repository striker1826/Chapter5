const { Likes, Posts, sequelize } = require("../models");

class LikesRepository {
  findLikeOne = async (postNum, userNum) => {
    const currentLike = await Likes.findOne({ where: { postNum, userNum } });
    return currentLike;
  };

  likeIncrement = async (postNum, userNum) => {
    await Likes.create({ postNum, userNum });
    return;
  };

  likeDecrement = async (postNum, userNum) => {
    await Likes.destroy({ where: { postNum, userNum } });
    return;
  };

  updateLike = async (currentLike, postNum, userNum) => {
    if (!currentLike) {
      await Posts.increment({ like: 1 }, { where: { id: postNum } });
      return { message: "게시글에 좋아요를 등록했습니다." };
    } else {
      await Posts.decrement({ like: 1 }, { where: { id: postNum } });
      return { message: "게시글에 좋아요를 취소했습니다." };
    }
  };

  getAllLikePosts = async (userId) => {
    const [likeArr] = await sequelize.query(
      "SELECT l.postNum, l.userNum, m.nickname, p.title, p.`like`, l.createdAt, l.updatedAt FROM Posts p LEFT JOIN Likes l ON p.id = l.postNum LEFT JOIN Members m ON l.userNum = m.id WHERE postNum is not null"
    );

    // const myLikeArr = [];
    // for (let i = 0; i < likeArr.length; i++) {
    //   if (likeArr[i].userNum === userId) {
    //     myLikeArr.push(likeArr[i]);
    //   }
    // }

    const resultArray = [];
    likeArr.map((like, idx) => {
      like.userNum === userId ? resultArray.push(like) : false;
    });
    console.log("@@@@@@@@@@@@@@@@myLikeArr", resultArray);
    return resultArray;
  };
}

module.exports = LikesRepository;
