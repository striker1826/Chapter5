import { Sequelize } from "sequelize"
import Posts from "../models/posts"
const sequelize = new Sequelize()
export class PostsRepository {
    findAllPost = async () => {
        const [posts] = await sequelize.query(
            "SELECT p.id, m.nickname, p.title, p.content, p.likes, p.createdAt, p.updatedAt FROM Posts p INNER JOIN Members m ON p.userNum = m.id"
        );
        return posts;
    }

    createPost = async(title: string, content: string) => {
        const createPost = await Posts.create({ title, content}) 
        return createPost
    }
}

export default PostsRepository;