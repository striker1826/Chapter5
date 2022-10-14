const MembersService = require("../service/members.service");

class MembersController {
  MembersService = new MembersService();

  createMembers = async (req, res, next) => {
    const { userId, nickname, password, confirmPw } = req.body;
    await this.MembersService.createMembers(
      userId,
      nickname,
      password,
      confirmPw
    );
    res.status(200).json({ message: "회원가입이 완료되었습니다" });
  };
}

module.exports = MembersController;
