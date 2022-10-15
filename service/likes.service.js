const LikesRepository = require("../repository/likes.repository")

class LikesService {
    likesRepository = new LikesRepository();

    updateLike = async (postId, userId) => {
        const like = await this.likesRepository.updateLike(postId, userId);
        return resizeBy.json({like})
    }
}

module.exports = LikesService;