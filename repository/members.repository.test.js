const MembersRepository = require("./members.repository");
// const membersRepository = new MembersRepository();
jest.mock('./members.repository') // -> mocking

test("회원가입 - createMembers", async () => {
    MembersRepository.createMembers = jest.fn();
    
    const userId = "honggd";
    const nickname = "길동쓰";
    const password = "1234";

    const createdMember = await membersRepository.createMembers(userId, nickname, password);

    expect(userId).toEqual(createdMember.userId);
});

// 동일한 회원아이디로 가입했을 때 오류코드 확인하는 테스트 작성해보기

test("회원찾기 - findOneMember", async () => {
    const userId = "honggd";
    const password = "1234";
    
    const findMember = await membersRepository.findOneMember(userId, password);
    
    expect(userId).toEqual(findMember.userId);
});

test("회원 정보 수정 - updateMember", async () => {
    const userId = "honggd";
    const nickname = "홍홍홍";
    const password = "1234";

    await membersRepository.updateMember(userId, nickname, password);

    const findMember = await membersRepository.findOneMember(userId, password);

    expect(nickname).toEqual(updateMember.nickname);
});

test("회원 탈퇴 - deleteMember", async () => {
    const userId = "honggd";
    const password = "1234";

    await membersRepository.deleteMember(userId, password);
    findMember = await membersRepository.findOneMember(userId, password);

    expect(null).toEqual(findMember);
})
