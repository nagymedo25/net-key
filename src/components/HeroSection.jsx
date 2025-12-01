import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold border border-brand-primary/20 mb-6"
        >
          🚀 أكبر مجتمع عربي للشبكات والأمن السيبراني
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          NET KEY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-accent">
            مجتمعك الاحترافي
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto"
        >
          منصة تجمع الطلاب والمهندسين لتبادل الخبرات، حل المشاكل التقنية، والعثور على فرص عمل في مجالات الشبكات والأمن السيبراني.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-xl bg-accent text-white font-bold shadow-lg hover:bg-blue-600 transition flex items-center justify-center gap-2">
            انضم للمجتمع <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-xl border border-slate-300 dark:border-slate-600 hover:border-brand-primary hover:text-brand-primary transition font-bold">
            اكتشف الغرف
          </button>
        </div>
      </div>
    </section>
  );
}