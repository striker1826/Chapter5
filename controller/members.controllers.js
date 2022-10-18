const MembersService = require("../service/members.service");
const jwt = require("jsonwebtoken");

class MembersController {
  MembersService = new MembersService();

  createMembers = async (req, res, next) => {
    /**
     *  @swagger
     * /customers:
     * post:
     * tag: Members
     *  description: 회원가입 기능입니다
     *  response:
     *  200:
     * description: 회원가입이 되었습니다
     */
    if (req.headers.authorization) {
      res.status(400).send("로그인이 이미 되어있습니다");
      return;
    }
    try {
      const { userId, nickname, password, confirmPw } = req.body;

      const result = await this.MembersService.createMembers(
        userId,
        nickname,
        password,
        confirmPw
      );
      res.send("회원가입에 성공했습니다");
    } catch (e) {
      res.json(e.message);
    }
  };

  loginMembers = async (req, res, next) => {
    const { userId, password } = req.body;
    if (req.headers.authorization) {
      res.status(400).send("로그인이 이미 되어있습니다");
      return;
    }
    try {
      const user = await this.MembersService.findOneMember(userId, password);

      res.send({
        token: jwt.sign({ userId: user.userId }, process.env.COOKIE_NAME, {
          expiresIn: "24h",
        }),
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errorMessage: e.message });
    }
  };

  deleteMember = async (req, res, next) => {
    try {
      const { userId, password } = req.body;
      await this.MembersService.deleteMember(userId, password);
      res.status(200).send("회원정보가 삭제되었습니다");
    } catch (err) {
      res.status(400).send("입력하신 정보가 올바른지 확인해주세요");
    }
  };

  updateMember = async (req, res, next) => {
    try {
      const { userId, nickname, password } = req.body;
      await this.MembersService.updateMember(userId, nickname, password);
      res.status(200).send("회원정보가 수정되었습니다");
    } catch (err) {
      res.status(400).send("입력하신 정보가 올바른지 확인해주세요");
    }
  };
}

module.exports = MembersController;
