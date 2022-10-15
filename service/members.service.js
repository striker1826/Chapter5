const { json } = require("sequelize");
const membersRepository = require("../repository/members.repository");
const nicknameReg = /^[a-zA-Z0-9]{3,20}$/;
const passwordReg = /^[a-zA-Z0-9]{4,20}$/;

class MembersService {
  membersRepository = new membersRepository();

  createMembers = async (userId, nickname, password, confirmPw) => {
    try {
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
    } catch (e) {
      return {
        message: "정보를 확인해 주세요",
        status: 401,
        errorMessage: e.message,
      };
    }
  };

  findOneMember = async (userId, password) => {
    const findOneMember = await this.membersRepository.findOneMember(userId);
    console.log(findOneMember);

    if (!findOneMember || password !== findOneMember.password) {
      throw new Error("닉네임 또는 패스워드를 확인해주세요.");
    }
    return findOneMember;
  };
}

module.exports = MembersService;
