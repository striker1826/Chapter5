const { Members } = require("../models");
class MembersRepository {
  createMembers = async () => {
    const createMembers = await Members.create({ userId, nickname, password });
    return createMembers;
  };
}

module.exports = MembersRepository;
