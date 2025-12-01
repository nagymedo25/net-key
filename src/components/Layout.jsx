// Main Layout Component
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Menu, Search, Bell, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/app/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-brand-dark">
            {/* Sidebar */}
            <Sidebar isMobileOpen={isMobileMenuOpen} setIsMobileOpen={setIsMobileMenuOpen} />

            {/* Main Content */}
            <main className="md:mr-72">
                {/* Top Header */}
                <header className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="px-4 py-3 flex items-center gap-4">
                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
                        >
                            <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                        </button>

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
                            <div className="relative">
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="ابحث عن منشورات، أسئلة، أو مستخدمين..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pr-10 pl-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition"
                                />
                            </div>
                        </form>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2">
                            <Link
                                to="/app/notifications"
                                className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition"
                            >
                                <Bell className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </Link>

                            <Link
                                to="/app/post/create"
                                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-primary to-accent text-white rounded-full font-semibold hover:shadow-lg hover:shadow-brand-primary/30 transition"
                            >
                                <Plus className="w-5 h-5" />
                                <span>منشور جديد</span>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-4 md:p-6">
                    <Outlet />
                </div>

                {/* Mobile FAB for Create Post */}
                <Link
                    to="/app/post/create"
                    className="sm:hidden fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-r from-brand-primary to-accent text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all z-30"
                >
                    <Plus className="w-6 h-6" />
                </Link>
            </main>
        </div>
    );
}
