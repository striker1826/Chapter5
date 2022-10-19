const LikesService = require("../service/likes.service")

class LikesController {
    LikesService = new LikesService();

    likePost = async (req, res, next) => {
        const { postId } = req.params;
        const { id } = res.locals.user;

        const result = await this.LikesService.updateLike(postId, id);
        res.status(201).send(result);
    }
    
    getAllLikePosts = async (req, res, next) => {
        const { id } = res.locals.user;
        const myLikeList = await this.LikesService.getAllLikePosts(id);
        res.status(200).send(myLikeList);
    }
}

module.exports = LikesController;

