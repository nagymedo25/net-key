// src/router.jsx
import { createHashRouter } from 'react-router-dom'; // 👈 تغيير هام هنا
import Layout from './components/Layout';
import HomeFeed from './pages/HomeFeed';
// ... (باقي الاستيرادات كما هي)
import AboutPage from './pages/AboutPage';
import LandingPage from './pages/LandingPage';

// صفحة الخطأ البسيطة (تأكد من إضافتها لتجنب الشاشة البيضاء)
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold">404</h1>
    <p>الصفحة غير موجودة</p>
    <a href="/#/" className="text-blue-500 hover:underline">العودة للرئيسية</a>
  </div>
);

// 👈 استخدام createHashRouter بدلاً من createBrowserRouter
export const router = createHashRouter([
    {
        path: '/app',
        element: <Layout />,
        children: [
            { index: true, element: <HomeFeed /> },
            // ... (باقي المسارات كما هي)
            { path: 'about', element: <AboutPage /> },
            // مسار التقاط الأخطاء داخل التطبيق
            { path: '*', element: <NotFound /> }
        ]
    },
    {
        path: '/',
        element: <LandingPage />
    },
    // مسار التقاط الأخطاء العام
    { path: '*', element: <NotFound /> }
]);