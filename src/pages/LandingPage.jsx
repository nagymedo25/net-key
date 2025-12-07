import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import img from "../assets/img1.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* About / Vision Section Briefly */}
        <section id="vision" className="py-16 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">رؤيتنا ورسالتنا</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              أن تصبح <strong>NET KEY</strong> أكبر مجتمع عربي متخصص في شبكات الحاسب والأمن السيبراني. نحن هنا لنسد الفجوة بين المحتوى النظري وسوق العمل، وتوفير بيئة احترافية للطلاب والمهندسين.
            </p>
            <ul className="space-y-2 text-slate-500 dark:text-slate-400">
              <li>✅ ربط المبتدئين بالخبراء (Mentorship).</li>
              <li>✅ نشر المعرفة بشكل منظم وعملي.</li>
              <li>✅ بيئة نظيفة بدون ضوضاء الشبكات العامة.</li>
            </ul>
          </motion.div>
          
          <div className="h-70 bg-slate-900/40 backdrop-blur-xl animate-gradient bg-gradient-to-r Deep Galaxy rounded-[12px] bg-gradient-to-br from-brand-primary to-blue-700 opacity-70 flex items-center justify-center text-white text-2xl font-bold shadow-2xl">
               <img src={img} alt="" className=" rounded-[12px] shadow-2xl" />
          </div>
        </section>

        <FeaturesSection />

        {/* Target Audience */}
        <section id="audience" className="py-20 text-center bg-brand-primary/5 dark:bg-slate-800/30">
          <h2 className="text-3xl font-bold mb-8">لمن هذه المنصة؟</h2>
          <div className="flex flex-wrap justify-center gap-4 px-4 max-w-5xl mx-auto">
            {["طلاب مدارس WE", "مهندسو الشبكات", "دارسو CCNA & CCNP", "خبراء Cyber Security", "طلاب هندسة وحاسبات"].map((item, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium">
                {item}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}