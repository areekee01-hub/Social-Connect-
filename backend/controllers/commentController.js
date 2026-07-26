import Comment from '../models/Comment.js';
import Post from '../models/Post.js';

export const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { postId } = req.params;
    const userId = req.user.userId;

    const newComment = new Comment({
      postId,
      userId,
      text
    });

    await newComment.save();
    await Post.findByIdAndUpdate(postId, { $push: { comments: newComment._id } });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId })
      .populate('userId', 'username avatar')
      .sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    await Post.findByIdAndUpdate(comment.postId, { $pull: { comments: req.params.commentId } });
    await Comment.findByIdAndDelete(req.params.commentId);
    res.status(200).json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};