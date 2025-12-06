import { Bell, Heart, MessageCircle, Award, UserPlus, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // استيراد
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import { MOCK_NOTIFICATIONS, MOCK_USERS } from '../utils/mockData';
import { formatDate } from '../utils/helpers';

export default function Notifications() {
    const { t } = useTranslation(); // تفعيل

    const getNotificationIcon = (type) => {
       // ... (Same switch case)
       switch (type) {
            case 'reply':
                return <MessageCircle className="w-5 h-5 text-blue-500" />;
            case 'mention':
                return <MessageCircle className="w-5 h-5 text-purple-500" />;
            case 'badge':
                return <Award className="w-5 h-5 text-yellow-500" />;
            case 'follow':
                return <UserPlus className="w-5 h-5 text-green-500" />;
            case 'mentorship':
                return <Calendar className="w-5 h-5 text-brand-primary" />;
            default:
                return <Bell className="w-5 h-5 text-slate-500" />;
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">{t('notifications.title')}</h1>
                <button className="text-sm text-brand-primary hover:underline">
                    {t('notifications.mark_all_read')}
                </button>
            </div>

            <div className="space-y-2">
                {MOCK_NOTIFICATIONS.length > 0 ? MOCK_NOTIFICATIONS.map((notification) => {
                    const user = MOCK_USERS.find(u => u.id === notification.userId) || MOCK_USERS[0];
                    return (
                        <Card key={notification.id} className={`p-4 ${!notification.isRead ? 'bg-brand-primary/5 border-brand-primary/20' : ''} hover:shadow-md transition cursor-pointer`}>
                            {/* ... Notification Body ... */}
                             <div className="flex gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    {getNotificationIcon(notification.type)}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-start gap-3 mb-2">
                                        <Avatar src={user.avatar} alt={user.name} size="sm" />
                                        <div className="flex-1">
                                            <p className="text-sm">
                                                <Link to={`/profile/${user.id}`} className="font-semibold hover:text-brand-primary">
                                                    {user.name}
                                                </Link>
                                                {' '}
                                                <span className="text-slate-700 dark:text-slate-300">
                                                    {notification.message}
                                                </span>
                                            </p>
                                            <p className="text-xs text-slate-500 mt-1">
                                                {formatDate(notification.createdAt)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                }) : (
                     <div className="text-center py-8 text-slate-500">{t('notifications.empty')}</div>
                )}
            </div>

            {/* Load More */}
            <div className="text-center mt-6">
                <button className="text-brand-primary hover:underline font-medium">
                    {t('common.load_more')}
                </button>
            </div>
        </div>
    );
}