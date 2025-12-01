// Router Configuration
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
            { path: 'about', element: <AboutPage /> }
        ]
    },
    {
        path: '/',
        element: <LandingPage />
    }
]);
