// Leaderboard Page
import { Trophy, Medal, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Tabs from '../components/ui/Tabs';
import { MOCK_USERS } from '../utils/mockData';

export default function Leaderboard() {
    const sortedUsers = [...MOCK_USERS].sort((a, b) => b.points - a.points);
    const weeklyTop = sortedUsers.slice(0, 10);
    const monthlyTop = sortedUsers.slice(0, 10);
    const allTimeTop = sortedUsers.slice(0, 10);

    const LeaderboardList = ({ users }) => (
        <div className="space-y-3">
            {users.map((user, index) => (
                <Card key={user.id} className={`p-4 ${index < 3 ? 'ring-2 ring-brand-primary/30' : ''}`}>
                    <div className="flex items-center gap-4">
                        {/* Rank */}
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                            {index === 0 && <span className="text-3xl">🥇</span>}
                            {index === 1 && <span className="text-3xl">🥈</span>}
                            {index === 2 && <span className="text-3xl">🥉</span>}
                            {index > 2 && (
                                <div className="text-xl font-bold text-slate-400">#{index + 1}</div>
                            )}
                        </div>

                        {/* User Info */}
                        <Link to={`/profile/${user.id}`} className="flex items-center gap-3 flex-1">
                            <Avatar src={user.avatar} alt={user.name} size="lg" online={user.isOnline} />
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold truncate hover:text-brand-primary transition">
                                    {user.name}
                                </div>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {user.skills.slice(0, 2).map((skill, i) => (
                                        <Badge key={i} color="gray" className="text-xs">{skill}</Badge>
                                    ))}
                                </div>
                            </div>
                        </Link>

                        {/* Points and Badges */}
                        <div className="text-left">
                            <div className="flex items-center gap-1 text-brand-primary font-bold text-lg">
                                <Trophy className="w-5 h-5" />
                                {user.points}
                            </div>
                            <div className="text-sm text-slate-500">{user.badges} شارات</div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );

    const tabs = [
        {
            label: 'هذا الأسبوع',
            content: <LeaderboardList users={weeklyTop} />
        },
        {
            label: 'هذا الشهر',
            content: <LeaderboardList users={monthlyTop} />
        },
        {
            label: 'على الإطلاق',
            content: <LeaderboardList users={allTimeTop} />
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4">
                    <Trophy className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-2">المتصدرون</h1>
                <p className="text-slate-600 dark:text-slate-400">
                    أفضل المساهمين في مجتمع NET KEY
                </p>
            </div>

            {/* Current User Rank (Mock) */}
            <Card className="p-6 mb-6 bg-gradient-to-r from-brand-primary/10 to-accent/10 border-brand-primary/20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar src={MOCK_USERS[0].avatar} alt={MOCK_USERS[0].name} size="lg" />
                        <div>
                            <div className="font-semibold">ترتيبك الحالي</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">استمر في المساهمة!</div>
                        </div>
                    </div>
                    <div className="text-left">
                        <div className="text-3xl font-bold text-brand-primary">#{15}</div>
                        <div className="text-sm text-slate-500">{MOCK_USERS[0].points} نقطة</div>
                    </div>
                </div>
            </Card>

            {/* Leaderboard Tabs */}
            <Card className="p-6">
                <Tabs tabs={tabs} />
            </Card>
        </div>
    );
}
