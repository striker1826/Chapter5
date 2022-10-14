const { Posts } = require("../models");

class PostsRepository {

// 게시판 생성
createPost = async (userNum, title, content) => {
    const createPostData = await Posts.create({ userNum, title, content })

    return createPostData;
}


// 게시판 조회



// 게시판 수정



// 게시판 삭제



  
}

module.exports = PostsRepository;
