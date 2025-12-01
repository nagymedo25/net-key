// Post Detail Page (for non-question posts)
import { useParams } from 'react-router-dom';
import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { MOCK_POSTS, MOCK_USERS } from '../utils/mockData';
import { POST_TYPES } from '../utils/constants';
import { formatDate } from '../utils/helpers';

export default function PostDetail() {
    const { id } = useParams();
    const post = MOCK_POSTS.find(p => p.id === parseInt(id)) || MOCK_POSTS[0];
    const author = MOCK_USERS.find(u => u.id === post.authorId) || MOCK_USERS[0];
    const postType = POST_TYPES.find(t => t.id === post.type);

    const [comment, setComment] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-6">
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                    <Avatar src={author.avatar} alt={author.name} size="lg" online={author.isOnline} />
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{author.name}</h3>
                            {postType && (
                                <span className={`text-xs px-2 py-1 rounded ${postType.color}`}>
                                    {postType.icon} {postType.label}
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-slate-500">{formatDate(post.createdAt)}</p>
                    </div>
                </div>

                {/* Content */}
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

                <div className="prose dark:prose-invert max-w-none mb-6">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        {post.content}
                    </p>
                </div>

                {/* Image */}
                {post.image && (
                    <img src={post.image} alt="" className="w-full rounded-lg mb-6" />
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, index) => (
                            <Badge key={index} color="blue">#{tag}</Badge>
                        ))}
                    </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsLiked(!isLiked)}
                            className={`flex items-center gap-2 transition ${isLiked ? 'text-red-500' : 'text-slate-600 dark:text-slate-400 hover:text-red-500'
                                }`}
                        >
                            <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                            <span className="font-medium">{post.reactions}</span>
                        </button>

                        <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-primary transition">
                            <MessageCircle className="w-6 h-6" />
                            <span className="font-medium">{post.comments}</span>
                        </button>

                        <button
                            onClick={() => setIsSaved(!isSaved)}
                            className={`flex items-center gap-2 transition ${isSaved ? 'text-brand-primary' : 'text-slate-600 dark:text-slate-400 hover:text-brand-primary'
                                }`}
                        >
                            <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-current' : ''}`} />
                        </button>
                    </div>

                    <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-primary transition">
                        <Share2 className="w-6 h-6" />
                    </button>
                </div>
            </Card>

            {/* Comments Section */}
            <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">التعليقات ({post.comments})</h2>

                {/* Add Comment */}
                <div className="mb-6">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="أضف تعليقك..."
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none mb-3"
                    ></textarea>
                    <Button>نشر التعليق</Button>
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => {
                        const commenter = MOCK_USERS[i];
                        return (
                            <div key={i} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                <Avatar src={commenter.avatar} alt={commenter.name} size="md" />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold">{commenter.name}</span>
                                        <span className="text-xs text-slate-500">منذ ساعتين</span>
                                    </div>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">
                                        شكراً على المشاركة المفيدة! هذه المعلومات ساعدتني كثيراً في فهم الموضوع.
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>
        </div>
    );
}
