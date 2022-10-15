const { Likes, Posts } = require("../models")

class LikesRepository {

    findLikeOne = async (postNum, userNum) => {
        const currentLike = await Likes.findOne({where: {postNum, userNum}})
        return currentLike;
    }

    updateLike = async (currentLike, postNum, userNum) => {
        if(!currentLike) {
            await Likes.create({postNum, userNum});
            await Posts.increment({like: 1}, {where: {id: postNum}})
            return { message: "게시글에 좋아요를 등록했습니다."};
        } else {
            await Likes.destroy({where: {postNum, userNum}});
            await Posts.decrement({like: 1}, {where: {id: postNum}})
            return { message: "게시글에 좋아요를 취소했습니다."};
        }
    };
    
}

module.exports = LikesRepository;