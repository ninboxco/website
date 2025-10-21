import { useTranslation } from 'react-i18next';
import { Bell } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Notifier
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              {t('nav.features')}
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
              {t('nav.contact')}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
