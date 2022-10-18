import PostsService from "../service/posts";
import { Request, Response, NextFunction } from "express";
export class PostsController {
    postsService = new PostsService();

    findAllPost = async(req:Request, res:Response, next:NextFunction) => {
        return await this.postsService.findAllPost();
    }

    createPost = async(req: Request, res: Response, next:NextFunction) => {
        const {title} = req.body
        const {content} = req.body
        await this.postsService.createPost( title, content);
        return "게시글이 생성되었습니다"
    }
}


export default PostsController