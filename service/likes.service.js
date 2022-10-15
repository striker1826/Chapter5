const LikesRepository = require("../repository/likes.repository")

class LikesService {
    LikesRepository = new LikesRepository();

}

module.exports = LikesService;