// About/FAQ Page
import { HelpCircle, Mail, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/ui/Card';
import { ROOM_TYPES } from '../utils/constants';

export default function AboutPage() {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            q: 'ما هي NET KEY؟',
            a: 'NET KEY هي منصة مجتمعية عربية متخصصة في شبكات الحاسب والأمن السيبراني. نهدف إلى توفير بيئة احترافية للتعلم والنقاش وتبادل الخبرات بين المهندسين والطلاب.'
        },
        {
            q: 'كيف أكسب نقاطاً وشارات؟',
            a: 'يمكنك كسب النقاط من خلال: الإجابة على الأسئلة (+15 نقطة)، نشر دراسات حالة (+50 نقطة), الحصول على أفضل إجابة (+30 نقطة), المشاركة الفعالة في المجتمع.'
        },
        {
            q: 'هل المنصة مجانية؟',
            a: 'نعم، NET KEY مجانية تماماً للجميع. نحن نؤمن بأن المعرفة يجب أن تكون متاحة للجميع.'
        },
        {
            q: 'كيف أتواصل مع مرشد (Mentor)؟',
            a: 'يمكنك الذهاب إلى صفحة الإرشاد، اختيار المرشد المناسب، وطلب جلسة معه من خلال الضغط على "طلب جلسة". بعض المرشدين يقدمون خدماتهم مجاناً والبعض الآخر مقابل رسوم.'
        },
        {
            q: 'ما الفرق بين المجتمعات (Rooms)؟',
            a: 'كل مجتمع متخصص في موضوع معين. يمكنك الانضمام للمجتمعات التي تهمك ورؤية المنشورات الخاصة بها فقط.'
        },
        {
            q: 'كيف أنشر دراسة حالة؟',
            a: 'اذهب إلى "منشور جديد"، اختر نوع "دراسة حالة", ثم اكتب المشكلة والحل بالتفصيل مع إضافة صور توضيحية إن أمكن.'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">عن NET KEY</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    حيث تتحول الشبكات إلى قوة - Where Networks Become Power
                </p>
            </div>

            {/* Mission & Vision */}
            <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">رؤيتنا ورسالتنا</h2>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        أن تصبح <strong>NET KEY</strong> أكبر مجتمع عربي متخصص في شبكات الحاسب والأمن السيبراني.
                        نحن هنا لنسد الفجوة بين المحتوى النظري وسوق العمل، وتوفير بيئة احترافية للطلاب والمهندسين.
                    </p>
                    <ul className="space-y-2">
                        <li>✅ ربط المبتدئين بالخبراء (Mentorship)</li>
                        <li>✅ نشر المعرفة بشكل منظم وعملي</li>
                        <li>✅ بيئة نظيفة بدون ضوضاء الشبكات العامة</li>
                        <li>✅ مساعدة المهندسين في إيجاد فرص عمل</li>
                        <li>✅ توثيق الحلول والمشاكل الشائعة</li>
                    </ul>
                </div>
            </Card>

            {/* Rooms Description */}
            <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">المجتمعات المتخصصة</h2>
                <div className="space-y-4">
                    {ROOM_TYPES.map((room) => (
                        <div key={room.id} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${room.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                                {room.icon}
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">{room.nameAr}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{room.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* FAQ */}
            <Card className="p-8 mb-8">
                <div className="flex items-center gap-2 mb-6">
                    <HelpCircle className="w-6 h-6 text-brand-primary" />
                    <h2 className="text-2xl font-bold">الأسئلة الشائعة (FAQ)</h2>
                </div>
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full p-4 text-right font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition flex items-center justify-between"
                            >
                                <span>{faq.q}</span>
                                <span className="text-brand-primary text-xl">
                                    {openFaq === index ? '−' : '+'}
                                </span>
                            </button>
                            {openFaq === index && (
                                <div className="p-4 pt-0 text-slate-700 dark:text-slate-300">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Card>

            {/* How to Use */}
            <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">كيفية استخدام المنصة</h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            1
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">أنشئ حساباً</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                سجل بياناتك الأساسية وأكمل ملفك الشخصي
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            2
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">انضم للمجتمعات</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                اختر المجتمعات التي تهمك وابدأ في المتابعة
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            3
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">شارك وتعلم</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                اطرح أسئلة، أجب على استفسارات الآخرين، وشارك خبراتك
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            4
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">اكسب نقاطاً وشارات</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                المساهمة الفعالة تكسبك نقاطاً وتزيد من مستواك
                            </p>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Contact */}
            <Card className="p-8 text-center bg-gradient-to-r from-brand-primary/10 to-accent/10">
                <Mail className="w-12 h-12 mx-auto mb-4 text-brand-primary" />
                <h2 className="text-2xl font-bold mb-2">تواصل معنا</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                    لديك أسئلة أو اقتراحات؟ نحن هنا للمساعدة
                </p>
                <a
                    href="mailto:support@netkey.com"
                    className="inline-flex items-center gap-2 text-brand-primary hover:underline font-semibold"
                >
                    support@netkey.com
                    <ExternalLink className="w-4 h-4" />
                </a>
            </Card>
        </div>
    );
}
