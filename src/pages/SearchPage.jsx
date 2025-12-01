// Search Page
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useState } from 'react';
import Tabs from '../components/ui/Tabs';
import PostCard from '../components/PostCard';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import { MOCK_POSTS, MOCK_USERS } from '../utils/mockData';
import { ROOM_TYPES } from '../utils/constants';

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [searchQuery, setSearchQuery] = useState(query);

    // Search results
    const postResults = MOCK_POSTS.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.content.toLowerCase().includes(query.toLowerCase())
    );

    const userResults = MOCK_USERS.filter(u =>
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.bio.toLowerCase().includes(query.toLowerCase())
    );

    const roomResults = ROOM_TYPES.filter(r =>
        r.nameAr.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase())
    );

    const questionResults = postResults.filter(p => p.type === 'question');

    const tabs = [
        {
            label: `المنشورات (${postResults.length})`,
            content: (
                <div className="space-y-4">
                    {postResults.length > 0 ? (
                        postResults.map((post) => <PostCard key={post.id} post={post} />)
                    ) : (
                        <div className="text-center py-8 text-slate-500">لا توجد نتائج</div>
                    )}
                </div>
            )
        },
        {
            label: `الأسئلة (${questionResults.length})`,
            content: (
                <div className="space-y-4">
                    {questionResults.length > 0 ? (
                        questionResults.map((post) => <PostCard key={post.id} post={post} />)
                    ) : (
                        <div className="text-center py-8 text-slate-500">لا توجد أسئلة</div>
                    )}
                </div>
            )
        },
        {
            label: `المستخدمون (${userResults.length})`,
            content: (
                <div className="grid md:grid-cols-2 gap-4">
                    {userResults.length > 0 ? (
                        userResults.map((user) => (
                            <Card key={user.id} className="p-4">
                                <div className="flex items-center gap-4">
                                    <Avatar src={user.avatar} alt={user.name} size="lg" online={user.isOnline} />
                                    <div className="flex-1">
                                        <h3 className="font-bold">{user.name}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{user.bio}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {user.skills.map((skill, index) => (
                                                <Badge key={index} color="blue" className="text-xs">{skill}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-8 text-slate-500">لا توجد مستخدمين</div>
                    )}
                </div>
            )
        },
        {
            label: `المجتمعات (${roomResults.length})`,
            content: (
                <div className="grid md:grid-cols-2 gap-4">
                    {roomResults.length > 0 ? (
                        roomResults.map((room) => (
                            <Card key={room.id} className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${room.color} flex items-center justify-center text-3xl`}>
                                        {room.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg">{room.nameAr}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{room.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-8 text-slate-500">لا توجد مجتمعات</div>
                    )}
                </div>
            )
        }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <div className="max-w-5xl mx-auto">
            {/* Search Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">نتائج البحث</h1>

                <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="ابحث عن أي شيء..."
                        className="w-full pr-12 pl-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                </form>

                {query && (
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        نتائج البحث عن: <strong>"{query}"</strong>
                    </p>
                )}
            </div>

            {/* Results Tabs */}
            <Tabs tabs={tabs} />
        </div>
    );
}
