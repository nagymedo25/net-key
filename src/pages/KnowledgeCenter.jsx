// Knowledge Center Page
import { BookOpen, CheckCircle, Lock, Play } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Tabs from '../components/ui/Tabs';
import { MOCK_LESSONS } from '../utils/mockData';

export default function KnowledgeCenter() {
    const [completedLessons, setCompletedLessons] = useState([]);

    const toggleComplete = (lessonId) => {
        setCompletedLessons(prev =>
            prev.includes(lessonId)
                ? prev.filter(id => id !== lessonId)
                : [...prev, lessonId]
        );
    };

    const LessonCard = ({ lesson, isLocked }) => {
        const isCompleted = completedLessons.includes(lesson.id);

        return (
            <Card className={`p-4 ${isLocked ? 'opacity-50' : 'hover:shadow-lg cursor-pointer'} transition`}>
                <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isCompleted ? 'bg-green-100 dark:bg-green-900/30' :
                            isLocked ? 'bg-slate-100 dark:bg-slate-800' :
                                'bg-brand-primary/10'
                        }`}>
                        {isLocked ? (
                            <Lock className="w-6 h-6 text-slate-400" />
                        ) : isCompleted ? (
                            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        ) : (
                            <Play className="w-6 h-6 text-brand-primary" />
                        )}
                    </div>

                    <div className="flex-1">
                        <h3 className="font-semibold mb-1">{lesson.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            {lesson.duration}
                        </p>

                        {!isLocked && (
                            <Button
                                variant={isCompleted ? 'secondary' : 'primary'}
                                size="sm"
                                onClick={() => toggleComplete(lesson.id)}
                            >
                                {isCompleted ? 'مكتمل ✓' : 'ابدأ الدرس'}
                            </Button>
                        )}
                    </div>
                </div>
            </Card>
        );
    };

    const LevelContent = ({ lessons, level }) => {
        const totalLessons = lessons.length;
        const completed = lessons.filter(l => completedLessons.includes(l.id)).length;
        const progress = (completed / totalLessons) * 100;

        return (
            <div>
                {/* Progress */}
                <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <div className="flex justify-between mb-2">
                        <span className="font-medium">تقدمك في المستوى {level}</span>
                        <span className="text-brand-primary font-bold">{completed}/{totalLessons}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                        <div
                            className="bg-gradient-to-r from-brand-primary to-accent h-3 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Lessons */}
                <div className="space-y-3">
                    {lessons.map((lesson, index) => (
                        <LessonCard
                            key={lesson.id}
                            lesson={lesson}
                            isLocked={index > 0 && !completedLessons.includes(lessons[index - 1].id)}
                        />
                    ))}
                </div>

                {/* Quiz */}
                {completed === totalLessons && (
                    <Card className="p-6 mt-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                        <h3 className="text-xl font-bold mb-2">🎉 أكملت جميع الدروس!</h3>
                        <p className="mb-4">اختبر معرفتك الآن</p>
                        <Button variant="secondary">ابدأ الاختبار النهائي</Button>
                    </Card>
                )}
            </div>
        );
    };

    const tabs = [
        {
            label: 'مبتدئ 🌱',
            content: <LevelContent lessons={MOCK_LESSONS.beginner} level="مبتدئ" />
        },
        {
            label: 'متوسط 📈',
            content: <LevelContent lessons={MOCK_LESSONS.intermediate} level="متوسط" />
        },
        {
            label: 'متقدم 🚀',
            content: <LevelContent lessons={MOCK_LESSONS.advanced} level="متقدم" />
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4">
                    <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-2">مركز المعرفة</h1>
                <p className="text-slate-600 dark:text-slate-400">
                    تعلم الشبكات خطوة بخطوة من الصفر إلى الاحتراف
                </p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card className="p-4 text-center">
                    <div className="text-3xl font-bold text-brand-primary">30+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">درس قصير</div>
                </Card>
                <Card className="p-4 text-center">
                    <div className="text-3xl font-bold text-brand-primary">3</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">مستويات</div>
                </Card>
                <Card className="p-4 text-center">
                    <div className="text-3xl font-bold text-brand-primary">10</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">اختبارات</div>
                </Card>
            </div>

            {/* Lessons Tabs */}
            <Card className="p-6">
                <Tabs tabs={tabs} />
            </Card>
        </div>
    );
}
