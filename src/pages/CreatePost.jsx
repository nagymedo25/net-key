import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, X } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // استيراد الهوك
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { POST_TYPES, SKILL_BADGES } from '../utils/constants';

export default function CreatePost() {
    const { t } = useTranslation(); // تفعيل الترجمة
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [postType, setPostType] = useState('question');
    const [selectedTags, setSelectedTags] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleTag = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, content, postType, selectedTags, imagePreview });
        navigate('/');
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-8">
                <h1 className="text-2xl font-bold mb-6">{t('post.create_title')}</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Post Type Selection */}
                    <div>
                        <label className="block text-sm font-medium mb-3">{t('post.type_label')}</label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            {POST_TYPES.map((type) => (
                                <button
                                    key={type.id}
                                    type="button"
                                    onClick={() => setPostType(type.id)}
                                    className={`p-4 rounded-xl border-2 transition text-center ${postType === type.id
                                            ? 'border-brand-primary bg-brand-primary/10'
                                            : 'border-slate-200 dark:border-slate-700 hover:border-brand-primary/50'
                                        }`}
                                >
                                    <div className="text-2xl mb-1">{type.icon}</div>
                                    <div className="text-sm font-medium">{t(`post.types.${type.id}`)}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Title */}
                    <Input
                        label={t('post.title_placeholder')} // استخدامنا العنوان كـ Label أيضاً
                        placeholder={t('post.title_placeholder')}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    {/* Content */}
                    <div>
                        <label className="block text-sm font-medium mb-2">{t('post.content_placeholder')}</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder={t('post.content_placeholder')}
                            rows="8"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                            required
                        ></textarea>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium mb-2">{t('post.upload_image')}</label>
                        {imagePreview ? (
                            <div className="relative">
                                <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
                                <button
                                    type="button"
                                    onClick={() => setImagePreview(null)}
                                    className="absolute top-2 left-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <label className="block w-full p-8 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg cursor-pointer hover:border-brand-primary transition text-center">
                                <Image className="w-12 h-12 mx-auto mb-2 text-slate-400" />
                                <p className="text-slate-600 dark:text-slate-400">{t('post.upload_image')}</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </label>
                        )}
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-sm font-medium mb-3">{t('post.tags_placeholder')}</label>
                        <div className="flex flex-wrap gap-2">
                            {SKILL_BADGES.slice(0, 15).map((tag) => (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => toggleTag(tag)}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${selectedTags.includes(tag)
                                            ? 'bg-brand-primary text-white'
                                            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                                        }`}
                                >
                                    #{tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="flex gap-3 pt-4">
                        <Button type="submit" size="lg" className="flex-1">
                            {t('common.submit')}
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            size="lg"
                            onClick={() => navigate('/')}
                        >
                            {t('common.cancel')}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}