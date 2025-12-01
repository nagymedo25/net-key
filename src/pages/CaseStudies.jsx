import { Link } from 'react-router-dom';
import { Eye, ThumbsUp, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { MOCK_POSTS } from '../utils/mockData';
import { formatDate } from '../utils/helpers';

export default function CaseStudies() {
    const { t } = useTranslation();
    const caseStudies = MOCK_POSTS.filter(p => p.type === 'case-study');

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{t('case_studies.title')}</h1>
                <p className="text-slate-600 dark:text-slate-400">
                    {t('case_studies.subtitle')}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((caseStudy) => (
                    <Link key={caseStudy.id} to={`/case-study/${caseStudy.id}`}>
                        <Card className="p-6 hover:scale-105 transition-transform h-full">
                            {/* Image */}
                            {caseStudy.image && (
                                <img
                                    src={caseStudy.image}
                                    alt=""
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                            )}

                            {/* Badge */}
                            <Badge color="orange" className="mb-3">{t('post.types.case_study')}</Badge>

                            {/* Title */}
                            <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-brand-primary transition">
                                {caseStudy.title}
                            </h3>

                            {/* Preview */}
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                                {caseStudy.content}
                            </p>

                            {/* Tags */}
                            {caseStudy.tags && caseStudy.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {caseStudy.tags.slice(0, 2).map((tag, index) => (
                                        <Badge key={index} color="gray" className="text-xs">#{tag}</Badge>
                                    ))}
                                </div>
                            )}

                            {/* Stats */}
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    {caseStudy.views}
                                </div>
                                <div className="flex items-center gap-1">
                                    <ThumbsUp className="w-4 h-4" />
                                    {caseStudy.reactions}
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageCircle className="w-4 h-4" />
                                    {caseStudy.comments}
                                </div>
                            </div>

                            {/* Date */}
                            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500">
                                {formatDate(caseStudy.createdAt)}
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
