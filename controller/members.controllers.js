const MembersService = require("../service/members.service");
const jwt = require("jsonwebtoken");

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

  loginMembers = async (req, res, next) => {
    const { userId, password } = req.body;

    try {
      const user = await this.MembersService.findOneMember(userId, password);
      
      res.send({
        token: jwt.sign({ userId: user.userId }, process.env.COOKIE_NAME, {expiresIn: '60m'})
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errorMessage: e.message });
    }
  };
}

module.exports = MembersController;
