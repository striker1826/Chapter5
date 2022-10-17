const { json } = require("sequelize");
const membersRepository = require("../repository/members.repository");
const userIdReg = /^[a-zA-Z0-9]{3,20}$/;
const passwordReg = /^[a-zA-Z0-9]{4,20}$/;

const crypto = require("crypto");

const key = process.env.ENCRYPTED_KEY;

function pbkdf2(password, salt, iterations, len, hashType) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, iterations, len, hashType, (err, key) => {
      err ? reject(err) : resolve(key.toString("base64"));
    });
  });
}

class MembersService {
  membersRepository = new membersRepository();

  createMembers = async (userId, nickname, password, confirmPw) => {
    if (!userIdReg.test(userId)) {
      throw new Error(
        "아이디는 3~20자의 영문(대,소문자) 및 숫자 조합으로 생성 가능합니다."
      );
    }
    if (password !== confirmPw) {
      throw new Error("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }
    if (!passwordReg.test(password)) {
      throw new Error(
        "비밀번호는 4~20자의 영문(대,소문자) 및 숫자 조합으로 생성 가능합니다."
      );
    }

    const findOneMember = await this.membersRepository.findOneMember(
      userId,
      password
    );

    if (findOneMember && userId === findOneMember.userId) {
      throw new Error("이미 존재하는 아이디입니다.");
    } else {
      try {
        const hashPassword = await pbkdf2(password, key, 195878, 141, "sha512");
        const createdMember = await this.membersRepository.createMembers(
          userId,
          nickname,
          hashPassword,
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
    }
  };

  findOneMember = async (userId, password) => {
    const hashPassword = await pbkdf2(password, key, 195878, 141, "sha512");
    console.log(hashPassword);
    const findOneMember = await this.membersRepository.findOneMember(
      userId,
      hashPassword
    );

    if (!findOneMember || hashPassword !== findOneMember.password) {
      throw new Error("닉네임 또는 패스워드를 확인해주세요.");
    }
    return findOneMember;
  };

  deleteMember = async (userId, password) => {
    const hashPassword = await pbkdf2(password, key, 195878, 141, "sha512");
    const deleteMember = await this.membersRepository.deleteMember(
      userId,
      hashPassword
    );
    return deleteMember;
  };
}

module.exports = MembersService;
