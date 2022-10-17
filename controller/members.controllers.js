const MembersService = require("../service/members.service");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const key = "신기하다";

function pbkdf2(password, salt, iterations, len, hashType) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, iterations, len, hashType, (err, key) => {
      err ? reject(err) : resolve(key.toString("base64"));
    });
  });
}

class MembersController {
  MembersService = new MembersService();

  createMembers = async (req, res, next) => {
    try {
      const { userId, nickname, password, confirmPw } = req.body;
      const hashPassword = await pbkdf2(password, key, 195878, 141, "sha512");
      await this.MembersService.createMembers(
        userId,
        nickname,
        hashPassword,
        confirmPw
      );
      res.send("회원가입에 성공했습니다");
    } catch (e) {
      res.json(e);
    }
  };

  loginMembers = async (req, res, next) => {
    const { userId, password } = req.body;

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
}

module.exports = MembersController;
