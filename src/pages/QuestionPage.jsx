// Question Page with Answers
import { useParams, Link } from 'react-router-dom';
import { ArrowUp, ArrowDown, Check, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Avatar from '../components/ui/Avatar';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { MOCK_POSTS, MOCK_USERS, generateAnswers } from '../utils/mockData';
import { formatDate } from '../utils/helpers';

export default function QuestionPage() {
    const { id } = useParams();
    const post = MOCK_POSTS.find(p => p.id === parseInt(id)) || MOCK_POSTS[0];
    const author = MOCK_USERS.find(u => u.id === post.authorId) || MOCK_USERS[0];
    const answers = generateAnswers(post.id, 5);
    const [newAnswer, setNewAnswer] = useState('');

    const similarQuestions = MOCK_POSTS.filter(p => p.type === 'question' && p.id !== post.id).slice(0, 5);

    const AnswerItem = ({ answer }) => {
        const answerAuthor = MOCK_USERS.find(u => u.id === answer.authorId) || MOCK_USERS[0];
        const [votes, setVotes] = useState(answer.votes);

        return (
            <Card className="p-6">
                <div className="flex gap-4">
                    {/* Voting */}
                    <div className="flex flex-col items-center gap-2">
                        <button className="p-2 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition">
                            <ArrowUp className="w-5 h-5" onClick={() => setVotes(votes + 1)} />
                        </button>
                        <span className="font-bold text-lg">{votes}</span>
                        <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition" onClick={() => setVotes(votes - 1)}>
                            <ArrowDown className="w-5 h-5" />
                        </button>
                        {answer.isBestAnswer && (
                            <div className="mt-2 p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <Link to={`/profile/${answerAuthor.id}`}>
                                    <Avatar src={answerAuthor.avatar} alt={answerAuthor.name} size="md" />
                                </Link>
                                <div>
                                    <Link to={`/profile/${answerAuthor.id}`} className="font-semibold hover:text-brand-primary">
                                        {answerAuthor.name}
                                    </Link>
                                    <p className="text-sm text-slate-500">{formatDate(answer.createdAt)}</p>
                                </div>
                            </div>
                            {answer.isBestAnswer && (
                                <Badge color="green">أفضل إجابة ✓</Badge>
                            )}
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                                {answer.content}
                            </p>
                        </div>

                        <div className="mt-4 flex items-center gap-4">
                            <button className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-primary flex items-center gap-1">
                                <MessageCircle className="w-4 h-4" />
                                تعليق
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        );
    };

    return (
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
                {/* Question */}
                <Card className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                        <Link to={`/profile/${author.id}`}>
                            <Avatar src={author.avatar} alt={author.name} size="lg" />
                        </Link>
                        <div className="flex-1">
                            <Link to={`/profile/${author.id}`} className="font-semibold text-lg hover:text-brand-primary">
                                {author.name}
                            </Link>
                            <p className="text-sm text-slate-500">{formatDate(post.createdAt)}</p>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

                    <div className="prose dark:prose-invert max-w-none mb-4">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {post.content}
                        </p>
                    </div>

                    {post.image && (
                        <img src={post.image} alt="" className="w-full rounded-lg mb-4" />
                    )}

                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                                <Badge key={index} color="blue">#{tag}</Badge>
                            ))}
                        </div>
                    )}

                    <div className="text-sm text-slate-500">
                        {post.views} مشاهدة • {post.comments} إجابة
                    </div>
                </Card>

                {/* Answers */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">{answers.length} إجابة</h2>
                    {answers.map((answer) => (
                        <AnswerItem key={answer.id} answer={answer} />
                    ))}
                </div>

                {/* Add Answer */}
                <Card className="p-6">
                    <h3 className="text-lg font-bold mb-4">أضف إجابتك</h3>
                    <textarea
                        value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                        placeholder="اكتب إجابتك المفصلة هنا..."
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none mb-4"
                    ></textarea>
                    <Button>نشر الإجابة</Button>
                </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                <Card className="p-6">
                    <h3 className="font-bold mb-4">أسئلة مشابهة</h3>
                    <div className="space-y-3">
                        {similarQuestions.map((q) => (
                            <Link
                                key={q.id}
                                to={`/question/${q.id}`}
                                className="block p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                            >
                                <p className="text-sm line-clamp-2 mb-1">{q.title}</p>
                                <span className="text-xs text-slate-400">{q.comments} إجابة</span>
                            </Link>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
