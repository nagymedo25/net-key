import i18n from '../i18n';

export const formatDate = (date) => {
    const now = new Date();
    const diff = now - new Date(date);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const lang = i18n.language;
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });

    if (days > 7) {
        return new Date(date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US');
    }
    if (days > 0) return rtf.format(-days, 'day');
    if (hours > 0) return rtf.format(-hours, 'hour');
    if (minutes > 0) return rtf.format(-minutes, 'minute');
    return lang === 'ar' ? 'الآن' : 'Just now';
};

export const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
};

export const calculateLevel = (points) => {
    if (points >= 5000) return { level: 5, name: 'Diamond', progress: 100 };
    if (points >= 3000) return { level: 4, name: 'Platinum', progress: ((points - 3000) / 2000) * 100 };
    if (points >= 1500) return { level: 3, name: 'Gold', progress: ((points - 1500) / 1500) * 100 };
    if (points >= 500) return { level: 2, name: 'Silver', progress: ((points - 500) / 1000) * 100 };
    return { level: 1, name: 'Bronze', progress: (points / 500) * 100 };
};

export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

export const getRandomColor = () => {
    const colors = [
        'bg-blue-500', 'bg-green-500', 'bg-purple-500',
        'bg-pink-500', 'bg-yellow-500', 'bg-red-500',
        'bg-indigo-500', 'bg-cyan-500', 'bg-orange-500'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

export const filterPosts = (posts, filter) => {
    switch (filter) {
        case 'newest':
            return [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        case 'active':
            return [...posts].sort((a, b) => (b.comments + b.reactions) - (a.comments + a.reactions));
        case 'questions':
            return posts.filter(p => p.type === 'question');
        case 'projects':
            return posts.filter(p => p.type === 'project');
        case 'case-studies':
            return posts.filter(p => p.type === 'case-study');
        default:
            return posts;
    }
};
