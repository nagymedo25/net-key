import { useState } from 'react';
import { TrendingUp, HelpCircle, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PostCard from '../components/PostCard';
import Card from '../components/ui/Card';
import { MOCK_POSTS } from '../utils/mockData';
import { FILTER_OPTIONS } from '../utils/constants';
import { filterPosts } from '../utils/helpers';

export default function HomeFeed() {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('newest');

    const filteredPosts = filterPosts(MOCK_POSTS, activeFilter);

    const trendingTopics = ['CCNA', 'BGP', 'Fiber Optics', 'Wireshark', 'SD-WAN'];
    const topQuestions = MOCK_POSTS.filter(p => p.type === 'question' && !p.isSolved).slice(0, 5);
  
    const navigate = useNavigate();

    const handleCreate = () => {
  
    navigate('/initializing');
};
    return (
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
                {/* Filter Tabs */}
                <Card className="p-4">
                    <div className="flex gap-2 overflow-x-auto">
                        {FILTER_OPTIONS.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition ${activeFilter === filter.id
                                    ? 'bg-gradient-to-r from-brand-primary to-accent text-white'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                                    }`}
                            >
                                {t(`feed.filters.${filter.id}`)}
                            </button>
                        ))}
                    </div>
                </Card>

                {/* Posts */}
                <div className="space-y-4">
                    {filteredPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center">
                    <button className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium transition">
                        {t('common.load_more')}
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                {/* Trending Topics */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-brand-primary" />
                        <h2 className="font-bold text-lg">{t('feed.trending')}</h2>
                    </div>
                    <div className="space-y-2">
                        {trendingTopics.map((topic, index) => (
                            <button
                                key={index}
                                className="w-full text-right rtl:text-right ltr:text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition flex items-center justify-between group"
                            >
                                <span className="text-slate-700 dark:text-slate-300 group-hover:text-brand-primary transition">
                                    #{topic}
                                </span>
                                <span className="text-xs text-slate-400">{Math.floor(Math.random() * 500) + 100}+</span>
                            </button>
                        ))}
                    </div>
                </Card>

                {/* Top Questions */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <HelpCircle className="w-5 h-5 text-orange-500" />
                        <h2 className="font-bold text-lg">{t('feed.top_questions')}</h2>
                    </div>
                    <div className="space-y-3">
                        {topQuestions.map((question) => (
                            <a
                                key={question.id}
                                href={`/question/${question.id}`}
                                className="block p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition group"
                            >
                                <p className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-brand-primary line-clamp-2 mb-1">
                                    {question.title}
                                </p>
                                <span className="text-xs text-slate-400">{question.views} {t('common.views')}</span>
                            </a>
                        ))}
                    </div>
                </Card>

                {/* Quick Actions */}
                <Card className="p-6 bg-gradient-to-br from-brand-primary to-accent text-white">
                    <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5" />
                        <h3 className="font-bold">{t('feed.earn_points')}</h3>
                    </div>
                    <p className="text-sm text-white/90 mb-4">
                        {t('feed.earn_points_desc')}
                    </p>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>{t('feed.actions.answer_question')}</span>
                            <span className="font-bold">+15 {t('common.points')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>{t('feed.actions.post_case_study')}</span>
                            <span className="font-bold">+50 {t('common.points')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>{t('feed.actions.best_answer')}</span>
                            <span className="font-bold">+30 {t('common.points')}</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
