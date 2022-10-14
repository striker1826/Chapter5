const membersRepository = require("../repository/members.repository");

class MembersService {
  membersRepository = new membersRepository();
  createMembers = async (userId, nickname, password, confirmPw) => {
    const createdMember = await this.membersRepository.createMembers(
      userId,
      nickname,
      password,
      confirmPw
    );
    return {
      userId: createdMember.userId,
      nickname: createdMember.nickname,
      password: createdMember.password,
      confirPw: createdMember.confirPw,
    };
  };
}

module.exports = MembersService;
