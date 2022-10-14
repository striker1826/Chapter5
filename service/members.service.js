const { json } = require("sequelize");
const membersRepository = require("../repository/members.repository");
const nicknameReg = /^[a-zA-Z0-9]{3,20}$/;
const passwordReg = /^[a-zA-Z0-9]{4,20}$/;

class MembersService {
  membersRepository = new membersRepository();
  createMembers = async (userId, nickname, password, confirmPw) => {
    if (
      !nicknameReg.test(userId) ||
      !nicknameReg.test(nickname) ||
      !passwordReg.test(password)
    ) {
      //   throw new Error("error 표시");
      throw Error("로그인이 조건에 맞는지 확인해 주세요");
    }
    try {
      //   throw Error("에러다");
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
}

module.exports = MembersService;
