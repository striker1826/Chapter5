import express, { Request, Response} from 'express';
const router = express.Router();
import PostsController from '../controller/posts';
const postsController = new PostsController();

router.get('/', postsController.findAllPost)
router.post('/',  postsController.createPost)

export default router;