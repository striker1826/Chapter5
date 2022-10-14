const MembersService = require("../service/members.service");
const jwt = require("jsonwebtoken");

class MembersController {
  MembersService = new MembersService();

  createMembers = async (req, res, next) => {
    try {
      const { userId, nickname, password, confirmPw } = req.body;
      const result = await this.MembersService.createMembers(
        userId,
        nickname,
        password,
        confirmPw
      );
      res.status(result.status).json({ message: result.message });
    } catch (e) {
      res.json(e);
    }
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
