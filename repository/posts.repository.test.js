const PostsRepository = require("./posts.repository");
const postsRepository = new PostsRepository();

test("게시글 생성 - createPost", async () => {
  const id = 9;
  const title = "제목입니다.";
  const content = "내용입니다.";

  const createdPost = await postsRepository.createPost(id, title, content);

  expect(content).toEqual(createdPost.content);
});

test("게시글 조회", async () => {
  const id = 9;
  const title = "제목입니다.";
  const post = await postsRepository.findOnePost(id);
  expect(title).toEqual(post.title);
});

test("게시글 수정", async () => {
  const postId = 9;
  const title = "제목 수정입니다";
  const content = "내용 수정입니다";
  const userNum = 9;

  await postsRepository.updatePost(postId, title, content, userNum);
  const post = await postsRepository.findOnePost(postId);
  expect(content).toEqual(post.content);
});

test("게시글 삭제", async () => {
  const postId = 9;
  const userNum = 9;

  await postsRepository.deletePost(postId, userNum);
  const post = await postsRepository.findOnePost(postId);
  expect(null).toEqual(post);
});
