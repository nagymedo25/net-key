// Mock data generators for NET KEY Platform

const arabicNames = [
    'أحمد محمد', 'فاطمة علي', 'محمود حسن', 'سارة أحمد', 'عمر خالد',
    'نور الدين', 'ليلى يوسف', 'كريم صلاح', 'هدى عبدالله', 'يوسف إبراهيم',
    'مريم سعيد', 'طارق فهمي', 'رنا محمود', 'حسام علي', 'دينا حسين'
];

const companies = [
    'WE (المصرية للاتصالات)', 'Vodafone Egypt', 'Orange Egypt', 'Etisalat Misr',
    'Huawei Technologies', 'Cisco Egypt', 'Dell EMC', 'IBM Egypt',
    'Microsoft Egypt', 'Amazon Web Services'
];

const cities = ['القاهرة', 'الإسكندرية', 'الجيزة', 'الرياض', 'دبي', 'عمان', 'بيروت', 'الدوحة'];

// Generate random users
export const generateUsers = (count = 50) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: arabicNames[i % arabicNames.length],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
        bio: 'مهندس شبكات متخصص في التوجيه والتبديل',
        points: Math.floor(Math.random() * 6000),
        level: Math.floor(Math.random() * 5) + 1,
        badges: Math.floor(Math.random() * 10),
        skills: ['CCNA', 'Python', 'GNS3'].slice(0, Math.floor(Math.random() * 3) + 1),
        certificates: ['CCNA', 'HCIA'].slice(0, Math.floor(Math.random() * 2) + 1),
        isOnline: Math.random() > 0.5,
        joinedDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28))
    }));
};

// Generate random posts
export const generatePosts = (count = 30) => {
    const types = ['question', 'explanation', 'issue', 'project', 'case-study'];
    const titles = [
        'كيف أقوم بتكوين OSPF على راوتر Cisco؟',
        'شرح مبسط لبروتوكول BGP وأهميته',
        'مشكلة في اتصال VPN بين موقعين',
        'مشروع شبكة كاملة لشركة متوسطة',
        'دراسة حالة: حل مشكلة تقطع الإنترنت في مبنى إداري',
        'ما الفرق بين Switch Layer 2 و Layer 3؟',
        'شرح VLAN Trunking بالتفصيل',
        'مشكلة في Spanning Tree Protocol',
        'مشروع: بناء Data Center صغير',
        'كيفية استخدام Wireshark لتحليل الحزم'
    ];

    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        type: types[Math.floor(Math.random() * types.length)],
        title: titles[i % titles.length],
        content: 'محتوى المنشور هنا... يحتوي على تفاصيل تقنية مفيدة ومعلومات قيمة للمجتمع.',
        authorId: Math.floor(Math.random() * 15) + 1,
        roomId: ['routing-switching', 'cybersecurity', 'fiber-optics'][Math.floor(Math.random() * 3)],
        image: Math.random() > 0.6 ? `https://picsum.photos/seed/${i}/600/400` : null,
        reactions: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 50),
        saves: Math.floor(Math.random() * 30),
        views: Math.floor(Math.random() * 500),
        createdAt: new Date(2024, 10, Math.floor(Math.random() * 30)),
        tags: ['CCNA', 'Routing', 'Troubleshooting'].slice(0, Math.floor(Math.random() * 3) + 1),
        isSolved: Math.random() > 0.5
    }));
};

// Generate answers for questions
export const generateAnswers = (postId, count = 5) => {
    return Array.from({ length: count }, (_, i) => ({
        id: `${postId}-${i + 1}`,
        postId,
        authorId: Math.floor(Math.random() * 15) + 1,
        content: 'الحل هو تكوين البروتوكول بالشكل الصحيح... هذه الخطوات التفصيلية.',
        votes: Math.floor(Math.random() * 50),
        isBestAnswer: i === 0 && Math.random() > 0.5,
        createdAt: new Date(2024, 10, Math.floor(Math.random() * 30))
    }));
};

// Generate jobs
export const generateJobs = (count = 20) => {
    const titles = [
        'مهندس شبكات - Network Engineer',
        'مهندس أمن سيبراني - Security Engineer',
        'مهندس ألياف ضوئية - Fiber Optic Engineer',
        'Network Administrator',
        'DevOps Engineer',
        'Network Architect',
        'مهندس دعم فني - Technical Support Engineer'
    ];

    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        title: titles[i % titles.length],
        company: companies[Math.floor(Math.random() * companies.length)],
        location: cities[Math.floor(Math.random() * cities.length)],
        type: Math.random() > 0.3 ? 'full-time' : 'internship',
        level: ['junior', 'mid', 'senior'][Math.floor(Math.random() * 3)],
        remote: Math.random() > 0.5,
        requirements: ['CCNA', '2+ years experience', 'English proficient'],
        salary: Math.random() > 0.5 ? '15,000 - 25,000 EGP' : null,
        postedDate: new Date(2024, 10, Math.floor(Math.random() * 30)),
        logo: `https://api.dicebear.com/7.x/identicon/svg?seed=${i}`
    }));
};

// Generate notifications
export const generateNotifications = (count = 15) => {
    const types = ['reply', 'mention', 'badge', 'follow', 'mentorship'];
    const messages = {
        reply: 'قام بالرد على منشورك',
        mention: 'ذكرك في تعليق',
        badge: 'حصلت على شارة جديدة!',
        follow: 'بدأ في متابعتك',
        mentorship: 'قَبِل طلب الإرشاد الخاص بك'
    };

    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        type: types[Math.floor(Math.random() * types.length)],
        message: messages[types[Math.floor(Math.random() * types.length)]],
        userId: Math.floor(Math.random() * 15) + 1,
        isRead: Math.random() > 0.4,
        createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
    }));
};

// Generate messages/conversations
export const generateConversations = (count = 10) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        userId: Math.floor(Math.random() * 15) + 1,
        lastMessage: 'شكراً على المساعدة في حل المشكلة!',
        unreadCount: Math.floor(Math.random() * 5),
        lastMessageTime: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000)
    }));
};

// Generate mentors
export const generateMentors = (count = 12) => {
    const expertise = ['CCNA/CCNP', 'Cybersecurity', 'Fiber Optics', 'Network Automation', 'Cloud Networking'];

    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: arabicNames[i % arabicNames.length],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=mentor${i}`,
        bio: 'مهندس شبكات بخبرة +10 سنوات في المجال',
        expertise: [expertise[Math.floor(Math.random() * expertise.length)]],
        rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 to 5.0
        sessions: Math.floor(Math.random() * 100),
        available: Math.random() > 0.3,
        hourlyRate: Math.random() > 0.5 ? 'مجاناً' : '200 EGP/hour'
    }));
};

// Generate knowledge center lessons
export const generateLessons = () => {
    return {
        beginner: [
            { id: 1, title: 'مقدمة في الشبكات', duration: '10 دقائق', completed: false },
            { id: 2, title: 'OSI Model', duration: '15 دقيقة', completed: false },
            { id: 3, title: 'IP Addressing Basics', duration: '20 دقيقة', completed: false },
            { id: 4, title: 'Subnetting 101', duration: '25 دقيقة', completed: false }
        ],
        intermediate: [
            { id: 5, title: 'VLAN Configuration', duration: '30 دقيقة', completed: false },
            { id: 6, title: 'Routing Protocols Overview', duration: '35 دقيقة', completed: false },
            { id: 7, title: 'OSPF Deep Dive', duration: '40 دقيقة', completed: false }
        ],
        advanced: [
            { id: 8, title: 'BGP Configuration', duration: '45 دقيقة', completed: false },
            { id: 9, title: 'MPLS VPN', duration: '50 دقيقة', completed: false },
            { id: 10, title: 'SD-WAN Architecture', duration: '60 دقيقة', completed: false }
        ]
    };
};

export const MOCK_USERS = generateUsers();
export const MOCK_POSTS = generatePosts();
export const MOCK_JOBS = generateJobs();
export const MOCK_NOTIFICATIONS = generateNotifications();
export const MOCK_CONVERSATIONS = generateConversations();
export const MOCK_MENTORS = generateMentors();
export const MOCK_LESSONS = generateLessons();
