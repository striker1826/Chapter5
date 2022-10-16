const { Posts, sequelize } = require("../models");

class PostsRepository {

    createPost = async (id:number, title:string, content:string) => {
        const createPost = await Posts.create({ userNum: id, title, content });
    
        return createPost;
      };
}

module.exports = PostsRepository;