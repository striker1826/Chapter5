const { Likes } = require("../models")

class LikesRepository {

    likePost = async (postId, userId) => {
        const currentLike = await Likes.findOne({where: [{postId}, {userId}]})

        res.status(200).json({currentLike});
    }
}

module.exports = LikesRepository;