const LikesService = require("../service/likes.service")

class LikesController {
    LikesService = new LikesService();

    likePost = async (req, res, nexxt) => {
        const { postId } = req.params;
        console.log(res.locals.user);
        const { id } = res.locals.user;

        const result = await this.LikesService.updateLike(postId, id);
        res.status(201).send(result);
    }
}

module.exports = LikesController;

