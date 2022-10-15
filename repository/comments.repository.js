const { Comments } = require("../models");

class CommentsRepository {
  createComment = async (postNum, userNum, comment) => {
    await Comments.create(postNum, userNum, comment);
    return;
  };
}

module.exports = CommentsRepository;
