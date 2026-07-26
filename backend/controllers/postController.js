import Post from '../models/Post.js';
import User from '../models/User.js';

export const createPost = async (req, res) => {
  try {
    const { image, caption, hashtags, location } = req.body;
    const userId = req.user.userId;

    const newPost = new Post({
      userId,
      image,
      caption,
      hashtags: hashtags || [],
      location
    });

    await newPost.save();
    await User.findByIdAndUpdate(userId, { $push: { posts: newPost._id } });

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('userId', 'username avatar')
      .populate('comments')
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate('userId', 'username avatar')
      .populate('comments');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { caption, hashtags, location } = req.body;
    const post = await Post.findByIdAndUpdate(
      req.params.postId,
      { caption, hashtags, location, updatedAt: Date.now() },
      { new: true }
    );
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.postId);
    await User.findByIdAndUpdate(req.user.userId, { $pull: { posts: req.params.postId } });
    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.postId,
      { $addToSet: { likes: req.user.userId } },
      { new: true }
    );
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const unlikePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.postId,
      { $pull: { likes: req.user.userId } },
      { new: true }
    );
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};