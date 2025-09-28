"use client";

import React, { useState, useEffect } from 'react';
import { Users, MessageCircle, Calendar, Award, X, Send } from 'lucide-react';

// --- Type Definitions ---
type User = {
    name: string;
    avatar: string;
};

type Reply = {
  id: string;
  author: string;
  text: string;
  avatar: string;
};

type Post = {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  replies: Reply[];
  category: string;
};

// --- Initial Data ---
const initialPosts: Post[] = [
    { 
      id: "post-1",
      title: "Best food for a Golden Retriever puppy?", 
      author: "LunaTheDoggo", 
      authorAvatar: "/Logo.png",
      replies: [
        { id: "reply-1-1", author: "VetAssistant", text: "We recommend a high-quality large-breed puppy formula!", avatar: "https://i.pravatar.cc/40?u=vet" },
        { id: "reply-1-2", author: "GoldenLover", text: "My pup loves the salmon recipe from Brand X.", avatar: "https://i.pravatar.cc/40?u=golden" }
      ], 
      category: "Nutrition" 
    },
    { 
      id: "post-2",
      title: "Tips for introducing a new cat to the family.", 
      author: "CatLover_88", 
      authorAvatar: "https://i.pravatar.cc/40?u=catlover",
      replies: [], 
      category: "Behaviour" 
    },
    { 
      id: "post-3",
      title: "First time pet owner - what should I expect?", 
      author: "NewbiePetParent", 
      authorAvatar: "https://i.pravatar.cc/40?u=newbie",
      replies: [
       { id: "reply-3-1", author: "Alex Johnson", text: "Patience is key! And lots of chew toys.", avatar: "https://i.pravatar.cc/40?u=community" }
      ], 
      category: "General Advice" 
    },
];

// --- AUTHENTICATION HOOK (REPLACE WITH YOUR ACTUAL IMPLEMENTATION) ---
// This is a placeholder. In your real application, you would import
// a hook from your authentication library (e.g., useUser from Clerk, useSession from NextAuth)
// that provides the user's authentication status and information.
const useAuth = (): { isAuthenticated: boolean; user: User | null } => {
  // TODO: Replace this mock implementation with your actual auth provider.
  // Example for a signed-out user:
  return { isAuthenticated: false, user: null };

  // Example for a signed-in user from your auth system:
  /*
  const { data: session, status } = useSession(); // Example from NextAuth
  if (status === 'authenticated') {
    return {
      isAuthenticated: true,
      user: { name: session.user.name, avatar: session.user.image }
    };
  }
  return { isAuthenticated: false, user: null };
  */
};


// --- Reusable Components ---

const SignInToInteract = ({ actionText }: { actionText: string }) => (
    <div className="mt-4 text-center rounded-lg bg-zinc-100 dark:bg-zinc-700/50 p-4">
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Please{" "}
        <button 
          onClick={() => alert("This would trigger your website's sign-in modal or redirect.")} 
          className="font-bold text-orange-500 hover:underline"
        >
          sign in or register
        </button>
        {" "}to {actionText}.
      </p>
    </div>
);

const ForumPost = ({ post, onAddReply, isAuthenticated, currentUser }: { post: Post, onAddReply: (postId: string, replyText: string) => void, isAuthenticated: boolean, currentUser: User | null }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newReply, setNewReply] = useState("");

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReply.trim() && currentUser) {
      onAddReply(post.id, newReply.trim());
      setNewReply("");
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-5 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <span className="text-xs font-semibold bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full">{post.category}</span>
          <h3 className="text-lg font-bold mt-2 text-zinc-900 dark:text-white">{post.title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <img src={post.authorAvatar} alt={post.author} className="w-5 h-5 rounded-full" />
            <p className="text-sm text-zinc-500 dark:text-zinc-400">by {post.author}</p>
          </div>
        </div>
        <div className="text-center flex-shrink-0 ml-4">
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-left focus:outline-none rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700">
            <p className="text-2xl font-bold text-orange-500">{post.replies.length}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Replies</p>
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 animate-fade-in">
          <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
            {post.replies.length > 0 ? (
              post.replies.map(reply => (
                <div key={reply.id} className="flex items-start gap-3">
                  <img src={reply.avatar} alt={reply.author} className="w-8 h-8 rounded-full mt-1" />
                  <div className="flex-1 bg-zinc-100 dark:bg-zinc-700/50 rounded-lg px-3 py-2">
                    <p className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">{reply.author}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">{reply.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center py-4">Be the first to reply!</p>
            )}
          </div>
            {isAuthenticated ? (
                <form onSubmit={handleReplySubmit} className="mt-4 flex gap-2">
                    <img src={currentUser?.avatar} alt="Your avatar" className="w-8 h-8 rounded-full" />
                    <input 
                        type="text" value={newReply} onChange={(e) => setNewReply(e.target.value)}
                        placeholder="Write a reply..."
                        className="flex-1 w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-shadow"
                    />
                    <button type="submit" className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors disabled:bg-zinc-400" disabled={!newReply.trim()}>
                        <Send size={20} />
                    </button>
                </form>
            ) : (
                <SignInToInteract actionText="reply to this post" />
            )}
        </div>
      )}
    </div>
  );
};

const CreatePostModal = ({ isOpen, onClose, onAddPost, currentUser }: { isOpen: boolean, onClose: () => void, onAddPost: (post: Omit<Post, 'replies' | 'id' | 'authorAvatar'>) => void, currentUser: User | null }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('General Advice');
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !currentUser?.name || !category) return;
    onAddPost({ title, author: currentUser.name, category });
    setTitle('');
    setCategory('General Advice');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"><X size={24} /></button>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Start a New Discussion</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-orange-500 focus:border-orange-500" required />
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Posting as</label>
            <div className="flex items-center gap-3 w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg">
                <img src={currentUser?.avatar} alt={currentUser?.name} className="w-6 h-6 rounded-full" />
                <span className="font-semibold">{currentUser?.name}</span>
            </div>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Category</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-orange-500 focus:border-orange-500">
              <option>General Advice</option><option>Nutrition</option><option>Behaviour</option><option>Health</option><option>Training</option>
            </select>
          </div>
          <div className="pt-4">
            <button type="submit" className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">Post Discussion</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function CommunitySupportPage() {
  const { isAuthenticated, user } = useAuth(); // Replace useAuth with your actual auth hook

  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleJoinConversationClick = () => {
    if (isAuthenticated) {
        setIsModalOpen(true);
    } else {
        alert("Please join our group to start a conversation.");
    }
  };

  const handleAddPost = (newPostData: Omit<Post, 'replies' | 'id' | 'authorAvatar'>) => {
    if(!user) return;
    const newPost: Post = {
      ...newPostData,
      id: crypto.randomUUID(),
      authorAvatar: user.avatar,
      replies: [],
    };
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };
  
  const handleAddReply = (postId: string, replyText: string) => {
    if (!user) return;
    const newReply: Reply = {
      id: crypto.randomUUID(),
      author: user.name,
      text: replyText,
      avatar: user.avatar
    };
    
    setPosts(prevPosts => prevPosts.map(post => 
      post.id === postId 
        ? { ...post, replies: [...post.replies, newReply] } // Replies appear at the bottom
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-36 pb-16">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-full mb-6">
            <Users className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">Community Hub</h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">Join fellow pet parents in our hub. Share, learn, and connect with the community.</p>
          <div className="mt-8">
            <button onClick={handleJoinConversationClick} className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800">
              Join the Conversation
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-orange-500" />
              <span>Trending Discussions</span>
            </h2>
            {posts.map(post => <ForumPost key={post.id} post={post} onAddReply={handleAddReply} isAuthenticated={isAuthenticated} currentUser={user} />)}
          </div>
          <aside className="space-y-8">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-xl font-bold flex items-center gap-3 mb-4"><Calendar className="w-6 h-6 text-orange-500" /><span>Upcoming Events</span></h3>
              <ul className="space-y-3 text-sm">
                <li className="text-zinc-700 dark:text-zinc-300"><strong className="block">Local Park Meetup</strong><span className="text-zinc-500 dark:text-zinc-400">September 28, 2025</span></li>
                <li className="text-zinc-700 dark:text-zinc-300"><strong className="block">Webinar: Puppy Training 101</strong><span className="text-zinc-500 dark:text-zinc-400">October 5, 2025</span></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-xl font-bold flex items-center gap-3 mb-4"><Award className="w-6 h-6 text-orange-500" /><span>Member of the Month</span></h3>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/64?u=community" alt="Alex" className="w-16 h-16 rounded-full" />
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">Alex Johnson</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">For sharing invaluable advice on senior pet care.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {isAuthenticated && <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddPost={handleAddPost} currentUser={user} />}
    </div>
  );
}

