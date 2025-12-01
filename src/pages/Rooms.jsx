// Rooms Listing Page
import { Link } from 'react-router-dom';
import { Users, TrendingUp } from 'lucide-react';
import Card from '../components/ui/Card';
import { ROOM_TYPES } from '../utils/constants';

export default function Rooms() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">المجتمعات التخصصية</h1>
                <p className="text-slate-600 dark:text-slate-400">
                    انضم إلى المجتمعات التي تهمك وشارك خبراتك مع آلاف المهندسين
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ROOM_TYPES.map((room) => (
                    <Link key={room.id} to={`/room/${room.id}`}>
                        <Card className="p-6 hover:scale-105 transition-transform cursor-pointer h-full">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${room.color} flex items-center justify-center text-4xl mb-4`}>
                                {room.icon}
                            </div>

                            <h2 className="text-xl font-bold mb-2">{room.nameAr}</h2>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                {room.description}
                            </p>

                            <div className="flex items-center justify-between text-sm text-slate-500">
                                <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    <span>{Math.floor(Math.random() * 5000) + 1000} عضو</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <TrendingUp className="w-4 h-4" />
                                    <span>نشط</span>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
