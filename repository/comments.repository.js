const { Comments } = require("../models");

class CommentsRepository {
  createComment = async (comment) => {
    await Comments.create(comment);
    return;
  };
}

module.exports = CommentsRepository;
