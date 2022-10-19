const MembersService = require("./members.service");
const MembersRepository = require("../repository/members.repository");

const membersService = new MembersService();
const membersRepository = new MembersRepository();

test("회원가입 - createMembers", async () => {
    const userId = "honggd";
    const nickname = "길똥이";
    const password = "1234";
    const confirmPw = "1234";

    const createdMember = await membersService.createMembers(userId, nickname, password, confirmPw);
    
    expect(userId).toEqual(createdMember.userId);
});

test("회원 찾기 - findOneMember", async () => {
    
    
    findOneMember = await membersService.findOneMember(userId, password);

    
});