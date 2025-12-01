// Room Detail Page
import { useParams } from 'react-router-dom';
import { Users, LogIn, LogOut } from 'lucide-react';
import { useState } from 'react';
import PostCard from '../components/PostCard';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import { ROOM_TYPES } from '../utils/constants';
import { MOCK_POSTS, MOCK_USERS } from '../utils/mockData';

export default function RoomDetail() {
    const { id } = useParams();
    const room = ROOM_TYPES.find(r => r.id === id) || ROOM_TYPES[0];
    const [isJoined, setIsJoined] = useState(false);

    const roomPosts = MOCK_POSTS.filter(p => p.roomId === id);
    const activeMembers = MOCK_USERS.slice(0, 8);

    return (
        <div className="max-w-7xl mx-auto">
            {/* Room Header */}
            <Card className="p-6 md:p-8 mb-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${room.color} flex items-center justify-center text-5xl flex-shrink-0`}>
                        {room.icon}
                    </div>

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold mb-2">{room.nameAr}</h1>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">{room.description}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span>{Math.floor(Math.random() * 5000) + 1000} عضو</span>
                            </div>
                            <span>•</span>
                            <span>{roomPosts.length} منشور</span>
                        </div>
                    </div>

                    <Button
                        variant={isJoined ? 'secondary' : 'primary'}
                        onClick={() => setIsJoined(!isJoined)}
                        className="flex items-center gap-2"
                    >
                        {isJoined ? (
                            <>
                                <LogOut className="w-5 h-5" />
                                مغادرة
                            </>
                        ) : (
                            <>
                                <LogIn className="w-5 h-5" />
                                انضمام
                            </>
                        )}
                    </Button>
                </div>
            </Card>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Posts Feed */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-xl font-bold">منشورات المجتمع</h2>
                    {roomPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Active Members */}
                    <Card className="p-6">
                        <h3 className="font-bold mb-4">الأعضاء النشطون</h3>
                        <div className="space-y-3">
                            {activeMembers.map((member) => (
                                <div key={member.id} className="flex items-center gap-3">
                                    <Avatar src={member.avatar} alt={member.name} size="sm" online={member.isOnline} />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-sm truncate">{member.name}</p>
                                        <p className="text-xs text-slate-500">{member.points} نقطة</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Sub-topics */}
                    <Card className="p-6">
                        <h3 className="font-bold mb-4">المواضيع الفرعية</h3>
                        <div className="space-y-2">
                            {['أساسيات', 'متقدم', 'مشاكل شائعة', 'أمثلة عملية'].map((topic, index) => (
                                <button key={index} className="w-full text-right px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                                    {topic}
                                </button>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
