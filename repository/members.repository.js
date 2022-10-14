const { Members } = require("../models");

class MembersRepository {

  createMembers = async (userId, nickname, password) => {
    const createMembers = await Members.create({ userId, nickname, password });
    return createMembers;
  };

  findOneMember = async (userId) => {
    const findOneMember = await Members.findOne({ where: { userId } });
    return findOneMember;
  }
}

module.exports = MembersRepository;
