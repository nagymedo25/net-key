import { User, Bell, Lock, Eye, Save } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // استيراد الهوك
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import { MOCK_USERS } from '../utils/mockData';

export default function Settings() {
    const { t } = useTranslation(); // تفعيل الترجمة
    const currentUser = MOCK_USERS[0];
    const [settings, setSettings] = useState({
        name: currentUser.name,
        bio: currentUser.bio,
        email: 'user@example.com',
        notifications: {
            comments: true,
            mentions: true,
            follows: true,
            messages: true
        },
        privacy: {
            profileVisibility: 'public',
            showEmail: false,
            showOnlineStatus: true
        }
    });

    const handleSaveProfile = (e) => {
        e.preventDefault();
        alert(t('common.success'));
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">{t('settings.title')}</h1>

            <div className="space-y-6">
                {/* Profile Settings */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <User className="w-5 h-5 text-brand-primary" />
                        <h2 className="text-xl font-bold">{t('settings.account')}</h2>
                    </div>

                    <form onSubmit={handleSaveProfile} className="space-y-4">
                         {/* ... (Avatar section kept same) ... */}
                        <div className="flex items-center gap-6">
                            <Avatar src={currentUser.avatar} alt={currentUser.name} size="2xl" />
                            <div>
                                <Button variant="secondary" size="sm">{t('common.edit')}</Button>
                            </div>
                        </div>

                        <Input
                            label={t('profile.about')} // Using "About Me" or Name context
                            value={settings.name}
                            onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                        />

                        <div>
                            <label className="block text-sm font-medium mb-2">{t('profile.about')}</label>
                            <textarea
                                value={settings.bio}
                                onChange={(e) => setSettings({ ...settings, bio: e.target.value })}
                                rows="3"
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                            ></textarea>
                        </div>

                        <Input
                            label="Email"
                            type="email"
                            value={settings.email}
                            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        />

                        <Button type="submit" className="flex items-center gap-2">
                            <Save className="w-4 h-4" />
                            {t('settings.save_changes')}
                        </Button>
                    </form>
                </Card>

                {/* Notification Settings */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Bell className="w-5 h-5 text-brand-primary" />
                        <h2 className="text-xl font-bold">{t('settings.notifications')}</h2>
                    </div>
                    {/* ... (Notifications checkboxes - Mapping text manually or adding new keys if specific texts aren't in json) ... */}
                     <div className="space-y-4">
                        {Object.entries(settings.notifications).map(([key, value]) => (
                            <label key={key} className="flex items-center justify-between cursor-pointer">
                                <span className="text-slate-700 dark:text-slate-300">
                                    {/* Using simple mapping for demonstration based on available keys or fallback */}
                                    {key === 'comments' && t('common.comments')}
                                    {key === 'mentions' && 'Mentions'} 
                                    {key === 'follows' && t('common.follow')}
                                    {key === 'messages' && t('common.message')}
                                </span>
                                <input
                                    type="checkbox"
                                    checked={value}
                                    onChange={(e) => setSettings({
                                        ...settings,
                                        notifications: { ...settings.notifications, [key]: e.target.checked }
                                    })}
                                    className="w-5 h-5 text-brand-primary rounded focus:ring-brand-primary"
                                />
                            </label>
                        ))}
                    </div>
                </Card>

                {/* Privacy Settings */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Eye className="w-5 h-5 text-brand-primary" />
                        <h2 className="text-xl font-bold">{t('settings.privacy')}</h2>
                    </div>
                    {/* ... Content ... */}
                     <div className="space-y-4">
                        {/* Example of translated dropdown */}
                        <div>
                             {/* ... */}
                        </div>
                    </div>
                </Card>
                
                 {/* Security Settings */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Lock className="w-5 h-5 text-brand-primary" />
                        <h2 className="text-xl font-bold">{t('settings.security')}</h2>
                    </div>
                     {/* ... Buttons ... */}
                </Card>
            </div>
        </div>
    );
}