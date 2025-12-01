// Messages Page
import { useState } from 'react';
import { Send, Image, Paperclip, Search } from 'lucide-react';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import { MOCK_CONVERSATIONS, MOCK_USERS } from '../utils/mockData';
import { formatDate } from '../utils/helpers';

export default function Messages() {
    const [selectedConversation, setSelectedConversation] = useState(MOCK_CONVERSATIONS[0]);
    const [newMessage, setNewMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const selectedUser = MOCK_USERS.find(u => u.id === selectedConversation?.userId) || MOCK_USERS[0];

    // Mock messages for selected conversation
    const messages = [
        { id: 1, text: 'مرحباً! كيف يمكنني مساعدتك؟', isMine: false, timestamp: new Date(Date.now() - 3600000) },
        { id: 2, text: 'عندي سؤال عن تكوين OSPF', isMine: true, timestamp: new Date(Date.now() - 3000000) },
        { id: 3, text: 'بالتأكيد! تفضل اسأل وسأساعدك', isMine: false, timestamp: new Date(Date.now() - 2400000) },
        { id: 4, text: 'كيف أقوم بتكوين OSPF على راوتر Cisco؟', isMine: true, timestamp: new Date(Date.now() - 1800000) },
        { id: 5, text: 'الخطوات بسيطة... أولاً تحتاج إلى تفعيل OSPF بالأمر router ospf...', isMine: false, timestamp: new Date(Date.now() - 1200000) },
    ];

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            console.log('Sending message:', newMessage);
            setNewMessage('');
        }
    };

    const filteredConversations = MOCK_CONVERSATIONS.filter(conv => {
        const user = MOCK_USERS.find(u => u.id === conv.userId);
        return user?.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="max-w-7xl mx-auto h-[calc(100vh-200px)]">
            <Card className="h-full overflow-hidden flex">
                {/* Conversations List */}
                <div className="w-80 border-l border-slate-200 dark:border-slate-700 flex flex-col">
                    {/* Search */}
                    <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                        <div className="relative">
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="بحث في المحادثات..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pr-10 pl-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border-none focus:outline-none focus:ring-2 focus:ring-brand-primary"
                            />
                        </div>
                    </div>

                    {/* Conversations */}
                    <div className="flex-1 overflow-y-auto">
                        {filteredConversations.map((conversation) => {
                            const user = MOCK_USERS.find(u => u.id === conversation.userId) || MOCK_USERS[0];
                            const isSelected = selectedConversation?.id === conversation.id;

                            return (
                                <button
                                    key={conversation.id}
                                    onClick={() => setSelectedConversation(conversation)}
                                    className={`w-full p-4 flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition border-b border-slate-200 dark:border-slate-700 ${isSelected ? 'bg-brand-primary/10' : ''
                                        }`}
                                >
                                    <Avatar src={user.avatar} alt={user.name} size="md" online={user.isOnline} />
                                    <div className="flex-1 text-right min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-semibold truncate">{user.name}</span>
                                            {conversation.unreadCount > 0 && (
                                                <span className="w-5 h-5 bg-brand-primary text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
                                                    {conversation.unreadCount}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                                            {conversation.lastMessage}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">
                                            {formatDate(conversation.lastMessageTime)}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col">
                    {selectedConversation ? (
                        <>
                            {/* Chat Header */}
                            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
                                <Avatar src={selectedUser.avatar} alt={selectedUser.name} size="lg" online={selectedUser.isOnline} />
                                <div>
                                    <h2 className="font-bold">{selectedUser.name}</h2>
                                    <p className="text-sm text-slate-500">
                                        {selectedUser.isOnline ? 'متصل الآن' : 'غير متصل'}
                                    </p>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50 dark:bg-slate-900">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.isMine ? 'justify-start' : 'justify-end'}`}
                                    >
                                        <div
                                            className={`max-w-md px-4 py-2 rounded-2xl ${message.isMine
                                                    ? 'bg-brand-primary text-white rounded-br-sm'
                                                    : 'bg-white dark:bg-slate-800 rounded-bl-sm'
                                                }`}
                                        >
                                            <p className="text-sm">{message.text}</p>
                                            <p className={`text-xs mt-1 ${message.isMine ? 'text-white/70' : 'text-slate-400'}`}>
                                                {formatDate(message.timestamp)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Message Input */}
                            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-2">
                                    <button type="button" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition">
                                        <Image className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                    </button>
                                    <button type="button" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition">
                                        <Paperclip className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                    </button>
                                    <input
                                        type="text"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        placeholder="اكتب رسالتك..."
                                        className="flex-1 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border-none focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!newMessage.trim()}
                                        className="p-3 bg-gradient-to-r from-brand-primary to-accent text-white rounded-full hover:shadow-lg transition disabled:opacity-50"
                                    >
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-slate-500">
                            اختر محادثة للبدء
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}
