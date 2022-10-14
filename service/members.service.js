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
    };
  };

  findOneMember = async (userId, password) => {
    const findOneMember = await this.membersRepository.findOneMember(userId);
    console.log(findOneMember);

    if(!findOneMember || password !== findOneMember.password) {
      throw new Error('닉네임 또는 패스워드를 확인해주세요.')
    }
    return findOneMember;
  };

}

module.exports = MembersService;
