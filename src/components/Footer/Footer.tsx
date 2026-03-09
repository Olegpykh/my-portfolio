import { Heart } from 'lucide-react';
import {SOCIAL} from '../../components/About/AboutConstant';

const YEAR = new Date().getFullYear();

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="transition-colors border-t bg-rose-50 dark:bg-stone-900 border-rose-100 dark:border-stone-800">
      <div className="max-w-4xl px-6 py-8 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-stone-400 dark:text-stone-500 text-center sm:text-left">
            © {YEAR} Oleg Pykhonin · Built with
            <Heart
              size={13}
              className="text-rose-400 fill-rose-400 animate-pulse"
            />
            React & Tailwind
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-all hover:scale-110 text-stone-400 dark:text-stone-500 hover:text-rose-500 dark:hover:text-rose-400"
                >
                  {icon}
                </a>
              ))}
            </div>

            <div className="w-px h-4 ml-1 bg-stone-200 dark:bg-stone-800" />

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center justify-center text-xs font-bold transition-transform rounded-full w-9 h-9 bg-rose-100 dark:bg-stone-800 text-rose-500 dark:text-rose-400 hover:bg-rose-200 dark:hover:bg-stone-700 active:scale-90"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
