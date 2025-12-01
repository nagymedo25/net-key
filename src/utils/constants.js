// Constants for NET KEY Platform

export const ROOM_TYPES = [
  {
    id: 'routing-switching',
    name: 'Routing & Switching',
    nameAr: 'التوجيه والتبديل',
    icon: '🔀',
    color: 'from-blue-500 to-cyan-500',
    description: 'OSPF, EIGRP, VLANs, STP, and routing protocols'
  },
  {
    id: 'fiber-optics',
    name: 'Fiber Optics',
    nameAr: 'الألياف الضوئية',
    icon: '💡',
    color: 'from-purple-500 to-pink-500',
    description: 'Fiber installation, OTDR, splicing, and optical networks'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    nameAr: 'الأمن السيبراني',
    icon: '🔒',
    color: 'from-red-500 to-orange-500',
    description: 'Firewalls, IDS/IPS, penetration testing, security hardening'
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting Lab',
    nameAr: 'مختبر حل المشاكل',
    icon: '🔧',
    color: 'from-green-500 to-emerald-500',
    description: 'Network diagnostics, packet analysis, debugging techniques'
  },
  {
    id: 'automation',
    name: 'Network Automation',
    nameAr: 'أتمتة الشبكات',
    icon: '⚙️',
    color: 'from-indigo-500 to-blue-500',
    description: 'Python, Ansible, APIs, DevOps for networking'
  },
  {
    id: 'jobs',
    name: 'Jobs Hub',
    nameAr: 'مركز الوظائف',
    icon: '💼',
    color: 'from-yellow-500 to-amber-500',
    description: 'Career opportunities and networking jobs'
  }
];

export const POST_TYPES = [
  { id: 'question', label: 'سؤال', labelEn: 'Question', icon: '❓', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
  { id: 'explanation', label: 'شرح', labelEn: 'Explanation', icon: '📚', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
  { id: 'issue', label: 'مشكلة', labelEn: 'Issue', icon: '⚠️', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
  { id: 'project', label: 'مشروع', labelEn: 'Project', icon: '🚀', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
  { id: 'case-study', label: 'دراسة حالة', labelEn: 'Case Study', icon: '📋', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' }
];

export const SKILL_BADGES = [
  'CCNA', 'CCNP', 'CCIE', 'HCIA', 'HCIP', 'HCIE',
  'Python', 'Ansible', 'GNS3', 'Packet Tracer',
  'Wireshark', 'Linux', 'BGP', 'MPLS', 'SD-WAN',
  'Firewall', 'VPN', 'Fiber Splicing', 'OTDR'
];

export const BADGE_LEVELS = [
  { id: 'bronze', name: 'Bronze', nameAr: 'برونزي', icon: '🥉', color: 'text-amber-700', minPoints: 0 },
  { id: 'silver', name: 'Silver', nameAr: 'فضي', icon: '🥈', color: 'text-gray-400', minPoints: 500 },
  { id: 'gold', name: 'Gold', nameAr: 'ذهبي', icon: '🥇', color: 'text-yellow-500', minPoints: 1500 },
  { id: 'platinum', name: 'Platinum', nameAr: 'بلاتيني', icon: '💎', color: 'text-cyan-400', minPoints: 3000 },
  { id: 'diamond', name: 'Diamond', nameAr: 'ألماسي', icon: '💠', color: 'text-blue-500', minPoints: 5000 }
];

export const KNOWLEDGE_LEVELS = [
  { id: 'beginner', name: 'Beginner', nameAr: 'مبتدئ', color: 'bg-green-500' },
  { id: 'intermediate', name: 'Intermediate', nameAr: 'متوسط', color: 'bg-yellow-500' },
  { id: 'advanced', name: 'Advanced', nameAr: 'متقدم', color: 'bg-red-500' }
];

export const FILTER_OPTIONS = [
  { id: 'newest', label: 'الأحدث', labelEn: 'Newest' },
  { id: 'active', label: 'الأكثر نشاطاً', labelEn: 'Most Active' },
  { id: 'questions', label: 'الأسئلة', labelEn: 'Questions' },
  { id: 'projects', label: 'المشاريع', labelEn: 'Projects' },
  { id: 'case-studies', label: 'دراسات الحالة', labelEn: 'Case Studies' }
];
