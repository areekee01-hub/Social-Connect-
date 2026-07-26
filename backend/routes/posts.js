import express from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost, likePost, unlikePost } from '../controllers/postController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, createPost);
router.get('/', getPosts);
router.get('/:postId', getPostById);
router.put('/:postId', protect, updatePost);
router.delete('/:postId', protect, deletePost);
router.post('/:postId/like', protect, likePost);
router.delete('/:postId/like', protect, unlikePost);

export default router;