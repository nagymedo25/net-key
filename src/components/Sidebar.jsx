// Sidebar Navigation Component
import { Network, Home, Users, BookOpen, Briefcase, MessageCircle, User, Settings, Trophy, Bell, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Avatar from './ui/Avatar';
import { MOCK_USERS } from '../utils/mockData';
import { calculateLevel } from '../utils/helpers';

export default function Sidebar({ isMobileOpen, setIsMobileOpen }) {
    const location = useLocation();
    const { isDarkMode, toggleTheme } = useTheme();

    // Mock current user (in real app, this would come from auth context)
    const currentUser = MOCK_USERS[0];
    const userLevel = calculateLevel(currentUser.points);

    const navItems = [
        { icon: Home, label: 'الرئيسية', path: '/app' },
        { icon: Users, label: 'المجتمعات', path: '/app/rooms' },
        { icon: BookOpen, label: 'مركز المعرفة', path: '/app/knowledge' },
        { icon: Briefcase, label: 'الوظائف', path: '/app/jobs' },
        { icon: MessageCircle, label: 'الرسائل', path: '/app/messages' },
        { icon: Trophy, label: 'المتصدرون', path: '/app/leaderboard' },
        { icon: Bell, label: 'الإشعارات', path: '/app/notifications' },
        { icon: User, label: 'الملف الشخصي', path: `/app/profile/${currentUser.id}` },
        { icon: Settings, label: 'الإعدادات', path: '/app/settings' }
    ];

    const isActive = (path) => {
        if (path === '/app') return location.pathname === '/app';
        return location.pathname.startsWith(path);
    };

    const sidebarContent = (
        <div className="h-full flex flex-col bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-700">
            {/* Logo */}
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <Link to="/app" className="flex items-center gap-3 hover:opacity-80 transition">
                    <div className="bg-gradient-to-r from-brand-primary to-accent p-2 rounded-lg shadow-lg">
                        <Network className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-wide text-slate-900 dark:text-white">NET KEY</span>
                </Link>
            </div>

            {/* User Info */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-3">
                    <Avatar src={currentUser.avatar} alt={currentUser.name} size="lg" online={true} />
                    <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate text-slate-900 dark:text-white">{currentUser.name}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{userLevel.name}</p>
                    </div>
                </div>

                {/* Level Progress */}
                <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                        <span>{currentUser.points} نقطة</span>
                        <span>{userLevel.progress.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-brand-primary to-accent h-2 rounded-full transition-all duration-300"
                            style={{ width: `${userLevel.progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileOpen && setIsMobileOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${active
                                    ? 'bg-gradient-to-r from-brand-primary to-accent text-white shadow-lg shadow-brand-primary/30'
                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:translate-x-1'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Theme Toggle */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-300 font-medium"
                >
                    <div className="flex items-center gap-3">
                        {isDarkMode ? (
                            <>
                                <Sun className="w-5 h-5 text-yellow-500" />
                                <span>الوضع النهاري</span>
                            </>
                        ) : (
                            <>
                                <Moon className="w-5 h-5 text-slate-600" />
                                <span>الوضع الليلي</span>
                            </>
                        )}
                    </div>
                    <div className={`w-10 h-6 rounded-full transition ${isDarkMode ? 'bg-yellow-500' : 'bg-slate-300'} relative`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${isDarkMode ? 'right-1' : 'right-5'}`}></div>
                    </div>
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-72 fixed right-0 top-0 h-screen z-30">
                {sidebarContent}
            </aside>

            {/* Mobile Sidebar */}
            {isMobileOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
                        onClick={() => setIsMobileOpen(false)}
                    ></div>

                    {/* Sidebar */}
                    <aside className="md:hidden fixed right-0 top-0 h-screen w-72 z-50 animate-slideIn">
                        {sidebarContent}
                    </aside>
                </>
            )}
        </>
    );
}
