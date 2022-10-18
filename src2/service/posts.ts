import PostsRepository from "../repository/posts"

export class PostsService {
    postsRepository = new PostsRepository();
    
    findAllPost = async () => {
        const findAllPost = await this.postsRepository.findAllPost()
        return findAllPost;
    }

    createPost = async (title:string, content:string) => {
        const createPost = await this.postsRepository.createPost( title, content)
        return createPost;
    }
}

export default PostsService;