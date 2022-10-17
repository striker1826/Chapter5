import express from "express";
const router = express.Router();
import postsRouter from './posts'

router.use('/posts', postsRouter)

export default router