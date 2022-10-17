const { Members } = require("../models");

class MembersRepository {
  createMembers = async (userId, nickname, password) => {
    const createMembers = await Members.create({ userId, nickname, password });
    return createMembers;
  };

  findOneMember = async (userId, password) => {
    const findOneMember = await Members.findOne({
      where: { userId, password },
    });
    return findOneMember;
  };

  deleteMember = async (userId, password) => {
    const deleteMember = await Members.destroy({
      where: { userId, password },
    });
    return deleteMember;
  };
}

module.exports = MembersRepository;
