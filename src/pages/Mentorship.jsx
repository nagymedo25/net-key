// Mentorship Page
import { Star, Calendar, Video, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { MOCK_MENTORS } from '../utils/mockData';

export default function Mentorship() {
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRequestSession = (mentor) => {
        setSelectedMentor(mentor);
        setIsModalOpen(true);
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-4">
                    <Video className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-2">برنامج الإرشاد (Mentorship)</h1>
                <p className="text-slate-600 dark:text-slate-400">
                    تواصل مع خبراء الشبكات واحصل على إرشاد مخصص لمسيرتك المهنية
                </p>
            </div>

            {/* Mentors Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_MENTORS.map((mentor) => (
                    <Card key={mentor.id} className="p-6">
                        <div className="text-center mb-4">
                            <Avatar src={mentor.avatar} alt={mentor.name} size="xl" className="mx-auto mb-3" />
                            <h3 className="font-bold text-lg mb-1">{mentor.name}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                {mentor.bio}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center justify-center gap-1 mb-3">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="font-semibold">{mentor.rating}</span>
                                <span className="text-sm text-slate-500">({mentor.sessions} جلسة)</span>
                            </div>

                            {/* Expertise */}
                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {mentor.expertise.map((skill, index) => (
                                    <Badge key={index} color="purple">{skill}</Badge>
                                ))}
                            </div>

                            {/* Availability */}
                            <div className={`text-sm font-medium mb-4 ${mentor.available ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}`}>
                                {mentor.available ? '✓ متاح للحجز' : '⏰ مشغول حالياً'}
                            </div>

                            {/* Price */}
                            <div className="text-brand-primary font-bold mb-4">
                                {mentor.hourlyRate}
                            </div>

                            {/* Actions */}
                            <div className="space-y-2">
                                <Button
                                    onClick={() => handleRequestSession(mentor)}
                                    disabled={!mentor.available}
                                    className="w-full"
                                >
                                    <Calendar className="w-4 h-4 ml-2" />
                                    طلب جلسة
                                </Button>
                                <Button variant="secondary" className="w-full">
                                    <MessageCircle className="w-4 h-4 ml-2" />
                                    إرسال رسالة
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Booking Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="حجز جلسة إرشاد"
            >
                {selectedMentor && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                            <Avatar src={selectedMentor.avatar} alt={selectedMentor.name} size="lg" />
                            <div>
                                <h3 className="font-bold">{selectedMentor.name}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {selectedMentor.expertise.join(', ')}
                                </p>
                            </div>
                        </div>

                        {/* Calendar Mock */}
                        <div>
                            <h4 className="font-semibold mb-3">اختر موعداً</h4>
                            <div className="grid grid-cols-7 gap-2 mb-4">
                                {['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'].map((day) => (
                                    <div key={day} className="text-center text-sm font-medium text-slate-600 dark:text-slate-400">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                                {Array.from({ length: 14 }, (_, i) => i + 1).map((day) => (
                                    <button
                                        key={day}
                                        className={`p-2 rounded-lg text-sm ${day % 3 === 0
                                                ? 'bg-brand-primary text-white hover:bg-brand-primary/80'
                                                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                                            }`}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Time Slots */}
                        <div>
                            <h4 className="font-semibold mb-3">اختر وقتاً</h4>
                            <div className="grid grid-cols-4 gap-2">
                                {['10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map((time) => (
                                    <button
                                        key={time}
                                        className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-brand-primary hover:text-white transition"
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Confirm */}
                        <div className="flex gap-3">
                            <Button className="flex-1">تأكيد الحجز</Button>
                            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                                إلغاء
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
