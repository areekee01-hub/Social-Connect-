import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Send, Image, User } from 'lucide-react';

export default function SocialConnectFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "alex_travels",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      caption: "Chasing sunsets at the edge of the world. 🌅 #wanderlust #socialconnect",
      likes: 124000,
      liked: true,
      comments: [
        { id: 1, user: "sara_m", text: "This looks absolutely breathtaking!" }
      ]
    }
  ]);

  const [newPostText, setNewPostText] = useState("");
  const [commentInputs, setCommentInputs] = useState({});

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        };
      }
      return post;
    }));
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost = {
      id: Date.now(),
      username: "current_user",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      caption: newPostText,
      likes: 0,
      liked: false,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setNewPostText("");
  };

  const handleAddComment = (postId, e) => {
    e.preventDefault();
    const commentText = commentInputs[postId];
    if (!commentText || !commentText.trim()) return;

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, { id: Date.now(), user: "current_user", text: commentText }]
        };
      }
      return post;
    }));

    setCommentInputs({ ...commentInputs, [postId]: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 py-3 px-4 shadow-sm">
        <div className="max-w-xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tight text-indigo-600">
            Social<span className="text-slate-800">Connect</span>
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-full transition">
              <User size={22} className="text-slate-700" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-xl mx-auto py-6 px-4 space-y-6">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <form onSubmit={handleCreatePost} className="space-y-4">
            <div className="flex gap-3">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
                alt="Your Avatar" 
                className="w-10 h-10 rounded-full object-cover border border-slate-100"
              />
              <textarea
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                placeholder="What's on your mind today?"
                className="w-full resize-none border-none focus:ring-0 text-slate-700 placeholder-slate-400 py-1 text-sm focus:outline-none"
                rows="2"
              />
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-slate-100">
              <button type="button" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 text-xs font-semibold transition">
                <Image size={16} /> Add Photo
              </button>
              <button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition"
              >
                Post
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 p-4">
                <img src={post.avatar} alt={post.username} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-800">{post.username}</h4>
                  <p className="text-[10px] text-slate-400">Just now</p>
                </div>
              </div>

              <div className="bg-slate-100 max-h-[450px] overflow-hidden flex items-center justify-center">
                <img src={post.image} alt="Post content" className="w-full h-auto object-cover" />
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => handleLike(post.id)} 
                      className={`transition-colors flex items-center gap-1 ${post.liked ? 'text-rose-500 font-semibold' : 'text-slate-600 hover:text-rose-500'}`}
                    >
                      <Heart size={20} fill={post.liked ? "currentColor" : "none"} />
                      <span className="text-xs">{post.likes}</span>
                    </button>
                    <div className="flex items-center gap-1 text-slate-600">
                      <MessageCircle size={20} />
                      <span className="text-xs">{post.comments.length}</span>
                    </div>
                  </div>
                  <button className="text-slate-600 hover:text-indigo-600 transition">
                    <Share2 size={20} />
                  </button>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 mr-2">{post.username}</span>
                  {post.caption}
                </p>

                {post.comments.length > 0 && (
                  <div className="pt-2 space-y-1.5 border-t border-slate-50">
                    {post.comments.map((comment) => (
                      <p key={comment.id} className="text-xs text-slate-600">
                        <span className="font-semibold text-slate-800 mr-1.5">{comment.user}</span>
                        {comment.text}
                      </p>
                    ))}
                  </div>
                )}

                <form 
                  onSubmit={(e) => handleAddComment(post.id, e)}
                  className="flex gap-2 items-center pt-2 border-t border-slate-100"
                >
                  <input
                    type="text"
                    value={commentInputs[post.id] || ""}
                    onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                    placeholder="Add a comment..."
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-full px-4 py-2 focus:outline-none focus:border-indigo-300 text-slate-700"
                  />
                  <button type="submit" className="text-indigo-600 hover:text-indigo-800 p-1">
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}