import { Users, Award, Layout, Briefcase, BookOpen, ShieldCheck } from "lucide-react";

const features = [
  { icon: <Users />, title: "مجتمع تفاعلي", desc: "أسئلة وإجابات، وتجارب من الواقع (Real Case Studies)." },
  { icon: <Award />, title: "نظام Gamification", desc: "نقاط خبرة، Badges، وLeaderboards للمتميزين." },
  { icon: <Layout />, title: "Rooms متخصصة", desc: "غرف لـ Routing, Fiber, Security, Automation." },
  { icon: <Briefcase />, title: "فرص توظيف", desc: "فرص تدريب ووظائف حقيقية في كبرى الشركات." },
  { icon: <BookOpen />, title: "مركز تعليمي", desc: "شرح مبسط لمناهج Cisco, Huawei, Linux." },
  { icon: <ShieldCheck />, title: "بروفايلات قوية", desc: "اعرض مهاراتك وشهاداتك ومشاريعك." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">مميزات <span className="text-brand-primary">NET KEY</span></h2>
          <p className="text-slate-500">حلول لكل المشاكل اللي بتواجهك في المجال.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:shadow-xl hover:shadow-brand-primary/10 transition border border-transparent hover:border-brand-primary/20 group">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}