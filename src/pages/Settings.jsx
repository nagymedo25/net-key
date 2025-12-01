// Settings Page
import { User, Bell, Lock, Eye, Save } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import { MOCK_USERS } from '../utils/mockData';

export default function Settings() {
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
        console.log('Saving profile:', settings);
        alert('تم حفظ التغييرات بنجاح!');
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">الإعدادات</h1>

            <div className="space-y-6">
                {/* Profile Settings */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <User className="w-5 h-5 text-brand-primary" />
                        <h2 className="text-xl font-bold">الملف الشخصي</h2>
                    </div>

                    <form onSubmit={handleSaveProfile} className="space-y-4">
                        {/* Avatar */}
                        <div className="flex items-center gap-6">
                            <Avatar src={currentUser.avatar} alt={currentUser.name} size="2xl" />
                            <div>
                                <Button variant="secondary" size="sm">تغيير الصورة</Button>
                                <p className="text-sm text-slate-500 mt-2">JPG, PNG, حجم أقصى 2MB</p>
                            </div>
                        </div>

                        <Input
                            label="الاسم"
                            value={settings.name}
                            onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                        />

                        <div>
                            <label className="block text-sm font-medium mb-2">النبذة الشخصية</label>
                            <textarea
                                value={settings.bio}
                                onChange={(e) => setSettings({ ...settings, bio: e.target.value })}
                                rows="3"
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                            ></textarea>
                        </div>

                        <Input
                            label="البريد الإلكتروني"
                            type="email"
                            value={settings.email}
                            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        />

                        <Button type="submit" className="flex items-center gap-2">
                            <Save className="w-4 h-4" />
                            حفظ التغييرات
                        </Button>
                    </form>
                </Card>

                {/* Notification Settings */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Bell className="w-5 h-5 text-brand-primary" />
                        <h2 className="text-xl font-bold">الإشعارات</h2>
                    </div>

                    <div className="space-y-4">
                        {Object.entries(settings.notifications).map(([key, value]) => (
                            <label key={key} className="flex items-center justify-between cursor-pointer">
                                <span className="text-slate-700 dark:text-slate-300">
                                    {key === 'comments' && 'التعليقات على منشوراتي'}
                                    {key === 'mentions' && 'عند ذكري في منشور'}
                                    {key === 'follows' && 'متابعات جديدة'}
                                    {key === 'messages' && 'رسائل جديدة'}
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
                        <h2 className="text-xl font-bold">الخصوصية</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">ظهور الملف الشخصي</label>
                            <select
                                value={settings.privacy.profileVisibility}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    privacy: { ...settings.privacy, profileVisibility: e.target.value }
                                })}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                            >
                                <option value="public">عام (الجميع)</option>
                                <option value="members">الأعضاء فقط</option>
                                <option value="private">خاص (أنا فقط)</option>
                            </select>
                        </div>

                        <label className="flex items-center justify-between cursor-pointer">
                            <span className="text-slate-700 dark:text-slate-300">إظهار البريد الإلكتروني</span>
                            <input
                                type="checkbox"
                                checked={settings.privacy.showEmail}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    privacy: { ...settings.privacy, showEmail: e.target.checked }
                                })}
                                className="w-5 h-5 text-brand-primary rounded focus:ring-brand-primary"
                            />
                        </label>

                        <label className="flex items-center justify-between cursor-pointer">
                            <span className="text-slate-700 dark:text-slate-300">إظهار حالة الاتصال</span>
                            <input
                                type="checkbox"
                                checked={settings.privacy.showOnlineStatus}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    privacy: { ...settings.privacy, showOnlineStatus: e.target.checked }
                                })}
                                className="w-5 h-5 text-brand-primary rounded focus:ring-brand-primary"
                            />
                        </label>
                    </div>
                </Card>

                {/* Security Settings */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Lock className="w-5 h-5 text-brand-primary" />
                        <h2 className="text-xl font-bold">الأمان</h2>
                    </div>

                    <div className="space-y-4">
                        <Button variant="secondary" className="w-full">
                            تغيير كلمة المرور
                        </Button>
                        <Button variant="outline" className="w-full">
                            المصادقة الثنائية (2FA)
                        </Button>
                    </div>
                </Card>

                {/* Danger Zone */}
                <Card className="p-6 border-red-200 dark:border-red-900/30">
                    <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">منطقة الخطر</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        حذف الحساب نهائياً - هذا الإجراء لا يمكن التراجع عنه
                    </p>
                    <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                        حذف الحساب
                    </Button>
                </Card>
            </div>
        </div>
    );
}
