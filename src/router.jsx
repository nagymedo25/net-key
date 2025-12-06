// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomeFeed from './pages/HomeFeed';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
import QuestionPage from './pages/QuestionPage';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import UserProfile from './pages/UserProfile';
import Leaderboard from './pages/Leaderboard';
import KnowledgeCenter from './pages/KnowledgeCenter';
import SearchPage from './pages/SearchPage';
import JobsPage from './pages/JobsPage';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Mentorship from './pages/Mentorship';
import Settings from './pages/Settings';
import AboutPage from './pages/AboutPage';
import LandingPage from './pages/LandingPage';

// مكون بسيط لصفحة 404
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
    <h1 className="text-6xl font-bold text-slate-800 dark:text-slate-200 mb-4">404</h1>
    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة.</p>
    <a href="/app" className="px-6 py-3 bg-brand-primary text-white rounded-full hover:bg-opacity-90 transition">
      العودة للرئيسية
    </a>
  </div>
);

export const router = createBrowserRouter([
    {
        path: '/app',
        element: <Layout />,
        children: [
            { index: true, element: <HomeFeed /> },
            { path: 'post/create', element: <CreatePost /> },
            { path: 'post/:id', element: <PostDetail /> },
            { path: 'question/:id', element: <QuestionPage /> },
            { path: 'case-studies', element: <CaseStudies /> },
            { path: 'case-study/:id', element: <CaseStudyDetail /> },
            { path: 'rooms', element: <Rooms /> },
            { path: 'room/:id', element: <RoomDetail /> },
            { path: 'profile/:id', element: <UserProfile /> },
            { path: 'leaderboard', element: <Leaderboard /> },
            { path: 'knowledge', element: <KnowledgeCenter /> },
            { path: 'search', element: <SearchPage /> },
            { path: 'jobs', element: <JobsPage /> },
            { path: 'notifications', element: <Notifications /> },
            { path: 'messages', element: <Messages /> },
            { path: 'mentorship', element: <Mentorship /> },
            { path: 'settings', element: <Settings /> },
            { path: 'about', element: <AboutPage /> },
            // هذا السطر يلتقط أي رابط خاطئ داخل /app ويعرض صفحة الخطأ
            { path: '*', element: <NotFound /> }
        ]
    },
    {
        path: '/',
        element: <LandingPage />
    },
    // هذا السطر يلتقط أي رابط خاطئ خارج التطبيق
    {
        path: '*',
        element: <NotFound />
    }
]);