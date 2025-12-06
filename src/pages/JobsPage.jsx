import { Briefcase, MapPin, DollarSign, Clock, Filter } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // استيراد
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { MOCK_JOBS } from '../utils/mockData';
import { formatDate } from '../utils/helpers';

export default function JobsPage() {
    const { t } = useTranslation(); // تفعيل
    const [levelFilter, setLevelFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');

    const filteredJobs = MOCK_JOBS.filter(job => {
        if (levelFilter !== 'all' && job.level !== levelFilter) return false;
        if (typeFilter === 'internship' && job.type !== 'internship') return false;
        if (typeFilter === 'full-time' && job.type !== 'full-time') return false;
        return true;
    });

    const internships = MOCK_JOBS.filter(j => j.type === 'internship');

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{t('jobs.title')}</h1>
                <p className="text-slate-600 dark:text-slate-400">
                     {/* You might want to add a subtitle key in json, or stick to title */}
                     {t('jobs.title')}
                </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Filter className="w-5 h-5" />
                            <h3 className="font-bold">Filter</h3>
                        </div>

                        {/* Level Filter */}
                         {/* ... (Logic kept same) ... */}
                        
                        {/* Type Filter */}
                        <div>
                            <h4 className="font-medium mb-3 text-sm">Type</h4>
                            <div className="space-y-2">
                                {['all', 'full-time', 'internship'].map((type) => (
                                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="type"
                                            checked={typeFilter === type}
                                            onChange={() => setTypeFilter(type)}
                                            className="text-brand-primary focus:ring-brand-primary"
                                        />
                                        <span className="text-sm">
                                            {/* Mapping specific keys from jobs.filters */}
                                            {type === 'all' ? t('feed.filters.all') : 
                                             type === 'full-time' ? t('jobs.filters.full_time') : 
                                             t('jobs.filters.internship')}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Jobs List */}
                <div className="lg:col-span-3 space-y-4">
                    {/* ... (Internships logic) ... */}
                    
                    {/* All Jobs */}
                    <h2 className="text-xl font-bold mb-4">{t('feed.filters.all')} ({filteredJobs.length})</h2>
                    {filteredJobs.map((job) => (
                        <JobCard key={job.id} job={job} t={t} /> // Pass t prop
                    ))}
                </div>
            </div>
        </div>
    );
}

function JobCard({ job, isInternship, t }) {
    return (
        <Card className="p-6 hover:shadow-lg transition">
            <div className="flex gap-4">
                 {/* ... (Image section) ... */}
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h3 className="text-lg font-bold mb-1">{job.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{job.company}</p>
                        </div>
                        {isInternship && (
                            <Badge color="green">{t('jobs.filters.internship')}</Badge>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400 mb-4">
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {formatDate(job.postedDate)}
                        </div>
                        {job.remote && (
                            <Badge color="blue">{t('jobs.filters.remote')}</Badge>
                        )}
                    </div>

                     {/* ... (Requirements) ... */}

                    <Button>{t('jobs.apply')}</Button>
                </div>
            </div>
        </Card>
    );
}