import { useParams } from 'react-router-dom';
import { Award, MessageCircle, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // استيراد
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Tabs from '../components/ui/Tabs';
import PostCard from '../components/PostCard';
import { MOCK_USERS, MOCK_POSTS } from '../utils/mockData';
import { calculateLevel, formatDate } from '../utils/helpers';

export default function UserProfile() {
    const { t } = useTranslation(); // تفعيل
    const { id } = useParams();
    const user = MOCK_USERS.find(u => u.id === parseInt(id)) || MOCK_USERS[0];
    const userLevel = calculateLevel(user.points);
    const [isFollowing, setIsFollowing] = useState(false);

    const userPosts = MOCK_POSTS.filter(p => p.authorId === user.id);
    const userAnswers = userPosts.filter(p => p.type === 'question');

    const tabs = [
        {
            label: t('feed.filters.all'), // أو تخصيص مفتاح للمنشورات
            content: (
                <div className="space-y-4">
                    {userPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )
        },
        {
            label: t('feed.filters.questions'), // الإجابات/الأسئلة
            content: (
                <div className="space-y-4">
                    {userAnswers.map((post) => (
                        <Card key={post.id} className="p-4">
                            <h3 className="font-semibold mb-2">{post.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{post.content}</p>
                        </Card>
                    ))}
                </div>
            )
        },
        {
            label: t('feed.filters.projects'),
            content: (
                <div className="text-center py-8 text-slate-500">
                    {t('notifications.empty')}
                </div>
            )
        }
    ];

    return (
        <div className="max-w-5xl mx-auto">
            <Card className="p-6 md:p-8 mb-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <Avatar src={user.avatar} alt={user.name} size="2xl" online={user.isOnline} />

                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                            <div>
                                <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                                <p className="text-slate-600 dark:text-slate-400 mb-3">{user.bio}</p>
                                <p className="text-sm text-slate-500">
                                    {t('profile.joined')} {formatDate(user.joinedDate)}
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <Button
                                    variant={isFollowing ? 'secondary' : 'primary'}
                                    onClick={() => setIsFollowing(!isFollowing)}
                                    className="flex items-center gap-2"
                                >
                                    <UserPlus className="w-4 h-4" />
                                    {isFollowing ? t('common.unfollow') : t('common.follow')}
                                </Button>
                                <Button variant="secondary" className="flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4" />
                                    {t('common.message')}
                                </Button>
                            </div>
                        </div>

                        {/* Level Progress */}
                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5 text-brand-primary" />
                                    <span className="font-semibold">{userLevel.name} {t('profile.level')}</span>
                                </div>
                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                    {user.points} {t('common.points')}
                                </span>
                            </div>
                            {/* Progress Bar */}
                             <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                                <div
                                    className="bg-gradient-to-r from-brand-primary to-accent h-3 rounded-full transition-all"
                                    style={{ width: `${userLevel.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Skills */}
                        {user.skills && user.skills.length > 0 && (
                            <div className="mb-4">
                                <h3 className="font-semibold mb-2">{t('profile.skills')}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {user.skills.map((skill, index) => (
                                        <Badge key={index} color="blue">{skill}</Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                         
                         {/* Certificates */}
                        {user.certificates && user.certificates.length > 0 && (
                            <div>
                                <h3 className="font-semibold mb-3">{t('profile.certificates')}</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {user.certificates.map((cert, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-brand-primary/10 to-accent/10 border border-brand-primary/20 rounded-lg">
                                            <Award className="w-8 h-8 text-brand-primary" />
                                            <div>
                                                <div className="font-semibold">{cert}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Card>

            <Card className="p-6">
                <Tabs tabs={tabs} />
            </Card>
        </div>
    );
}