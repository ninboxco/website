import { useTranslation } from 'react-i18next';
import { Bell, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    product: [
      'features',
      'pricing',
      'documentation',
      'api'
    ],
    company: [
      'about',
      'blog',
      'careers',
      'contact'
    ],
    resources: [
      'guides',
      'tutorials',
      'support',
      'status'
    ],
    legal: [
      'privacy',
      'terms',
      'security',
      'gdpr'
    ]
  };

  return (
    <footer className="relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Notifier
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">
                {t(`footer.${category}`)}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {t(`footer.links.${link}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.links.privacy')}
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.links.terms')}
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.links.security')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
