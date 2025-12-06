// المسار: src/pages/InitializingPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // التعديل هنا: استخدام useNavigate بدلاً من Next.js router
import gsap from 'gsap';

const InitializingPage = () => {
  const navigate = useNavigate(); // هوك التوجيه في React Router
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);

  const statusMessages = [
    "جاري تهيئة المسار...",
    "تحليل البيانات المدخلة...",
    "بناء هيكل الصفحة...",
    "لمسات أخيرة..."
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
           // 🔥 بعد انتهاء الأنيميشن، وجه المستخدم للصفحة المطلوبة
           // يمكنك تغيير '/app/case-studies' لأي مسار تريده
           navigate('/app/case-studies', { replace: true }); 
        }
      });

      tl.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      )
      .fromTo(circleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" },
        "-=0.5"
      )
      .fromTo(textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.8"
      )
      .fromTo(progressRef.current, 
        { width: "0%" },
        { width: "100%", duration: 4, ease: "power1.inOut" },
        "-=0.5"
      );

      gsap.to(circleRef.current, {
        boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)",
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
      });

    }, containerRef);

    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % statusMessages.length);
      gsap.fromTo(textRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
    }, 1200);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div 
      ref={containerRef} 
      className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden bg-slate-950 text-white z-[100]" // z-100 لتغطية القوائم إذا لزم الأمر
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div 
          ref={circleRef}
          className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-600 shadow-2xl shadow-indigo-500/30"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <div className="absolute w-full h-full rounded-full border border-white/20 scale-125 animate-[spin_4s_linear_infinite]"></div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            جاري العمل
          </h2>
          <p ref={textRef} className="text-slate-400 text-sm font-medium h-5 min-w-[200px]">
            {statusMessages[messageIndex]}
          </p>
          <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-4 relative">
             <div 
               ref={progressRef}
               className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 rounded-full w-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
             ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitializingPage;