const { Members } = require("../models");

class MembersRepository {
  createMembers = async (userId, nickname, password) => {
    const createMembers = await Members.create({ userId, nickname, password });
    return createMembers;
  };

  findMemberByUserId = async (userId) => {{
    const findOneMember = await Members.findOne({where:{ userId }});
    return findOneMember;
  }}

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

  updateMember = async (userId, nickname, password) => {
    const updateMember = await Members.update(
      { nickname, password },
      {
        where: {
          userId,
          password,
        },
      }
    );
    return updateMember;
  };
}

module.exports = MembersRepository;
