import { useState } from 'react';
import { Send, Image, Paperclip, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // استيراد
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import { MOCK_CONVERSATIONS, MOCK_USERS } from '../utils/mockData';
import { formatDate } from '../utils/helpers';

export default function Messages() {
    const { t } = useTranslation(); // تفعيل
    const [selectedConversation, setSelectedConversation] = useState(MOCK_CONVERSATIONS[0]);
    const [newMessage, setNewMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    // ... (rest of logic)

    return (
        <div className="max-w-7xl mx-auto h-[calc(100vh-200px)]">
            <Card className="h-full overflow-hidden flex">
                <div className="w-80 border-l border-slate-200 dark:border-slate-700 flex flex-col">
                    <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                        <div className="relative">
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder={t('messages.search_placeholder')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pr-10 pl-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border-none focus:outline-none focus:ring-2 focus:ring-brand-primary"
                            />
                        </div>
                    </div>
                    {/* ... Conversations List ... */}
                </div>

                <div className="flex-1 flex flex-col">
                    {selectedConversation ? (
                        <>
                            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
                                {/* ... Header Info ... */}
                                <div>
                                     {/* ... */}
                                    <p className="text-sm text-slate-500">
                                        {/* Example for online status */}
                                        {t('messages.online')}
                                    </p>
                                </div>
                            </div>

                            {/* ... Messages Body ... */}

                            <form onSubmit={(e) => {e.preventDefault(); /*...*/}} className="p-4 border-t border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-2">
                                     {/* ... Buttons ... */}
                                    <input
                                        type="text"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        placeholder={t('messages.type_message')}
                                        className="flex-1 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border-none focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    />
                                    <button type="submit" className="p-3 bg-gradient-to-r from-brand-primary to-accent text-white rounded-full hover:shadow-lg transition disabled:opacity-50">
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-slate-500">
                            {/* Generic placeholder */}
                            {t('messages.title')}
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}