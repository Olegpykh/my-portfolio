import { useEffect, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from './nav';

const Header = () => {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);

      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-rose-50/95 dark:bg-stone-950/95 backdrop-blur-sm border-b border-rose-100/70 dark:border-stone-800 transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="flex items-center justify-between h-16 max-w-6xl gap-6 px-6 mx-auto">
        <button
          onClick={() => scrollTo(NAV_ITEMS[0].id)}
          className="text-sm font-medium tracking-[0.15em] uppercase transition-colors text-stone-900 dark:text-stone-100 hover:text-rose-500 dark:hover:text-rose-400 whitespace-nowrap"
        >
          Oleg Pykhonin
        </button>

        <nav className="items-center hidden gap-1 md:flex">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                activeId === id
                  ? 'text-rose-500 dark:text-rose-400'
                  : 'text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300'
              }`}
            >
              {label}

              {activeId === id && (
                <span className="absolute bottom-0 h-px left-3 right-3 bg-rose-400 dark:bg-rose-400/80" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors text-stone-400 dark:text-stone-500 hover:text-rose-500 dark:hover:text-rose-400"
          >
            <Github size={18} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors text-stone-400 dark:text-stone-500 hover:text-rose-500 dark:hover:text-rose-400"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
