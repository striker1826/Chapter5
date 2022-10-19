const PostsService = require("./posts.service");
const PostsRepository = require("../repository/posts.repository");
postsRepository = new PostsRepository();
postsService = new PostsService();

test("createPost - 제대로 받아오는지", async () => {
  const id = 1;
  const title = "타이틀";
  const content = "컨텐츠";

  const post = await postsService.createPost(id, title, content);
  expect(title).toEqual(post.title);
});
