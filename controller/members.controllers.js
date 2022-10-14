const MembersService = require("../service/members.service");

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
}

module.exports = MembersController;
