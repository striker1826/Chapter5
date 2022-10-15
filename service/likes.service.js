const LikesRepository = require("../repository/likes.repository")

class LikesService {
    likesRepository = new LikesRepository();

    updateLike = async (postNum, userNum) => {
        const currentLike = await this.likesRepository.findLikeOne(postNum, userNum);
        
        const result = await this.likesRepository.updateLike(currentLike, postNum, userNum);
        return result;
    }
}

module.exports = LikesService;