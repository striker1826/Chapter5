const PostsRepository = require("./posts.repository");
postsRepository = new PostsRepository();

test("게시글 생성 - createPost", async () => {
    const id = 1;
    const title = "제목입니다.";
    const content = "내용입니다.";

    const createdPost = await postsRepository.createPost(id, title, content);

    expect(content).toEqual(createdPost.content);
});