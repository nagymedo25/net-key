// Jobs Page
import { Briefcase, MapPin, DollarSign, Clock, Filter } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { MOCK_JOBS } from '../utils/mockData';
import { formatDate } from '../utils/helpers';

export default function JobsPage() {
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
                <h1 className="text-3xl font-bold mb-2">فرص العمل والتدريب</h1>
                <p className="text-slate-600 dark:text-slate-400">
                    اكتشف أحدث الفرص الوظيفية في مجال الشبكات والأمن السيبراني
                </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Filter className="w-5 h-5" />
                            <h3 className="font-bold">تصفية النتائج</h3>
                        </div>

                        {/* Level Filter */}
                        <div className="mb-6">
                            <h4 className="font-medium mb-3 text-sm">المستوى</h4>
                            <div className="space-y-2">
                                {['all', 'junior', 'mid', 'senior'].map((level) => (
                                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="level"
                                            checked={levelFilter === level}
                                            onChange={() => setLevelFilter(level)}
                                            className="text-brand-primary focus:ring-brand-primary"
                                        />
                                        <span className="text-sm">
                                            {level === 'all' ? 'الكل' : level === 'junior' ? 'مبتدئ' : level === 'mid' ? 'متوسط' : 'خبير'}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div>
                            <h4 className="font-medium mb-3 text-sm">النوع</h4>
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
                                            {type === 'all' ? 'الكل' : type === 'full-time' ? 'دوام كامل' : 'تدريب'}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Jobs List */}
                <div className="lg:col-span-3 space-y-4">
                    {/* Internships Section */}
                    {typeFilter === 'all' && internships.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-2xl">🎓</span> فرص التدريب
                            </h2>
                            <div className="space-y-4">
                                {internships.slice(0, 3).map((job) => (
                                    <JobCard key={job.id} job={job} isInternship />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* All Jobs */}
                    <h2 className="text-xl font-bold mb-4">جميع الوظائف ({filteredJobs.length})</h2>
                    {filteredJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function JobCard({ job, isInternship }) {
    return (
        <Card className="p-6 hover:shadow-lg transition">
            <div className="flex gap-4">
                {/* Company Logo */}
                <div className="w-16 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                </div>

                {/* Job Info */}
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h3 className="text-lg font-bold mb-1">{job.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{job.company}</p>
                        </div>
                        {isInternship && (
                            <Badge color="green">تدريب</Badge>
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
                            <Badge color="blue">عن بعد</Badge>
                        )}
                        <Badge color="gray">{job.level === 'junior' ? 'مبتدئ' : job.level === 'mid' ? 'متوسط' : 'خبير'}</Badge>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {job.requirements.map((req, index) => (
                            <Badge key={index} color="purple">{req}</Badge>
                        ))}
                    </div>

                    {job.salary && (
                        <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold mb-4">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                        </div>
                    )}

                    <Button>تقديم الآن</Button>
                </div>
            </div>
        </Card>
    );
}
