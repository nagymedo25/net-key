import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Avatar from '../components/ui/Avatar';
import { MOCK_POSTS, MOCK_USERS } from '../utils/mockData';
import { formatDate } from '../utils/helpers';

export default function CaseStudyDetail() {
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const caseStudy = MOCK_POSTS.find(p => p.id === parseInt(id)) || MOCK_POSTS[0];
    const author = MOCK_USERS.find(u => u.id === caseStudy.authorId) || MOCK_USERS[0];

    const relatedCases = MOCK_POSTS.filter(p => p.type === 'case-study' && p.id !== caseStudy.id).slice(0, 3);

    const solutionSteps = t('case_studies.example_content.steps', { returnObjects: true });

    return (
        <div className="max-w-7xl mx-auto">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-primary hover:underline mb-6">
                <ArrowRight className={`w-4 h-4 ${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                {t('case_studies.back_to_list')}
            </Link>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Main Content */}
                    <Card className="p-8">
                        <Badge color="orange" className="mb-4">{t('post.types.case_study')}</Badge>

                        <h1 className="text-3xl font-bold mb-4">{caseStudy.title}</h1>

                        {/* Author */}
                        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
                            <Link to={`/profile/${author.id}`}>
                                <Avatar src={author.avatar} alt={author.name} size="lg" />
                            </Link>
                            <div>
                                <Link to={`/profile/${author.id}`} className="font-semibold hover:text-brand-primary">
                                    {author.name}
                                </Link>
                                <p className="text-sm text-slate-500">{formatDate(caseStudy.createdAt)}</p>
                            </div>
                        </div>

                        {/* Image */}
                        {caseStudy.image && (
                            <img
                                src={caseStudy.image}
                                alt=""
                                className="w-full h-64 object-cover rounded-lg mb-6"
                            />
                        )}

                        {/* Problem Description */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                ⚠️ {t('case_studies.problem_description')}
                            </h2>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    {caseStudy.content}
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                                    {t('case_studies.example_content.problem')}
                                </p>
                            </div>
                        </div>

                        {/* Solution Steps */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                ✅ {t('case_studies.solution_steps')}
                            </h2>
                            <div className="space-y-3">
                                {Array.isArray(solutionSteps) && solutionSteps.map((step, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                        <div className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                                            {index + 1}
                                        </div>
                                        <p className="flex-1 text-slate-700 dark:text-slate-300 pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Results */}
                        <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg">
                            <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                {t('case_studies.final_result')}
                            </h3>
                            <p className="text-green-700 dark:text-green-300">
                                {t('case_studies.example_content.result')}
                            </p>
                        </div>

                        {/* Tags */}
                        {caseStudy.tags && caseStudy.tags.length > 0 && (
                            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                                <div className="flex flex-wrap gap-2">
                                    {caseStudy.tags.map((tag, index) => (
                                        <Badge key={index} color="blue">#{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Card>

                    {/* Comments Section */}
                    <Card className="p-6">
                        <h3 className="text-lg font-bold mb-4">{t('common.comments')} ({caseStudy.comments})</h3>
                        <div className="text-sm text-slate-500">التعليقات ستظهر هنا...</div>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card className="p-6">
                        <h3 className="font-bold mb-4">{t('case_studies.related_cases')}</h3>
                        <div className="space-y-4">
                            {relatedCases.map((related) => (
                                <Link
                                    key={related.id}
                                    to={`/case-study/${related.id}`}
                                    className="block p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                                >
                                    <p className="font-medium text-sm line-clamp-2 mb-1">{related.title}</p>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <span>{related.views} {t('common.views')}</span>
                                        <span>•</span>
                                        <span>{related.comments} {t('common.comments')}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
