// Post Card Component
import { Heart, MessageCircle, Bookmark, Share2, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Avatar from './ui/Avatar';
import Badge from './ui/Badge';
import { MOCK_USERS } from '../utils/mockData';
import { POST_TYPES } from '../utils/constants';
import { formatDate } from '../utils/helpers';

export default function PostCard({ post }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [reactions, setReactions] = useState(post.reactions);

    const author = MOCK_USERS.find(u => u.id === post.authorId) || MOCK_USERS[0];
    const postType = POST_TYPES.find(t => t.id === post.type);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setReactions(isLiked ? reactions - 1 : reactions + 1);
    };

    const postLink = post.type === 'question' ? `/question/${post.id}` : `/post/${post.id}`;

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="p-4 flex items-start justify-between">
                <div className="flex items-center gap-3 flex-1">
                    <Link to={`/profile/${author.id}`}>
                        <Avatar src={author.avatar} alt={author.name} size="md" online={author.isOnline} />
                    </Link>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <Link to={`/profile/${author.id}`} className="font-semibold hover:text-brand-primary transition">
                                {author.name}
                            </Link>
                            {postType && (
                                <span className={`text-xs px-2 py-0.5 rounded ${postType.color}`}>
                                    {postType.icon} {postType.label}
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            {formatDate(post.createdAt)}
                        </p>
                    </div>
                </div>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition">
                    <MoreVertical className="w-4 h-4" />
                </button>
            </div>

            {/* Content */}
            <Link to={postLink} className="block px-4 pb-3">
                <h3 className="text-lg font-bold mb-2 hover:text-brand-primary transition">
                    {post.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 line-clamp-3">
                    {post.content}
                </p>
            </Link>

            {/* Image */}
            {post.image && (
                <Link to={postLink}>
                    <img
                        src={post.image}
                        alt=""
                        className="w-full h-64 object-cover hover:opacity-95 transition"
                    />
                </Link>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
                <div className="px-4 py-2 flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                        <Badge key={index} color="gray" className="text-xs">
                            #{tag}
                        </Badge>
                    ))}
                </div>
            )}

            {/* Actions */}
            <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleLike}
                        className={`flex items-center gap-1.5 transition ${isLiked ? 'text-red-500' : 'text-slate-600 dark:text-slate-400 hover:text-red-500'
                            }`}
                    >
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                        <span className="text-sm font-medium">{reactions}</span>
                    </button>

                    <Link
                        to={postLink}
                        className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-brand-primary transition"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">{post.comments}</span>
                    </Link>

                    <button
                        onClick={() => setIsSaved(!isSaved)}
                        className={`flex items-center gap-1.5 transition ${isSaved ? 'text-brand-primary' : 'text-slate-600 dark:text-slate-400 hover:text-brand-primary'
                            }`}
                    >
                        <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                </div>

                <button className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-brand-primary transition">
                    <Share2 className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
