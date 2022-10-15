const LikesService = require("../service/likes.service")

class LikesController {
    LikesService = new LikesService();

    likePost = async (req, res, nexxt) => {
        const { postId } = req.params;
        console.log(res.locals.user);
        const { userId } = res.locals.user;

        await this.LikesService.updateLike(postId, userId);
    }
}

module.exports = LikesController;

