import { Network, Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/Logo-removebg-preview.png";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-brand-dark/90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-brand-primary to-accent p-2 rounded-lg">
              <img src= {logo} className="w-10 h-10" />
            </div>
            <span className="font-bold text-xl tracking-wide">NET KEY</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#vision" className="hover:text-brand-primary transition">{t('landing.vision')}</a>
            <a href="#features" className="hover:text-brand-primary transition">{t('landing.features')}</a>
            <a href="#audience" className="hover:text-brand-primary transition">{t('landing.audience')}</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-1"
              title={i18n.language === 'ar' ? 'Switch to English' : 'تغيير للعربية'}
            >
              <span className="font-bold text-sm text-slate-700 dark:text-slate-300">{i18n.language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
            <a href="/app" className="px-5 py-2 rounded-full bg-gradient-to-r from-brand-primary to-accent text-white font-semibold shadow-lg hover:shadow-brand-primary/30 transition hover:-translate-y-0.5">
              {t('common.start_now')}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex gap-4">
            <button
              onClick={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <span className="font-bold text-sm text-slate-700 dark:text-slate-300">{i18n.language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <button onClick={toggleTheme}>
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}