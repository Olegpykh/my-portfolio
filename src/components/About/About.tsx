import { m } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { SOCIAL } from './AboutConstant';

const About = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const cv = SOCIAL.find((item) => item.label === 'CV');

  return (
    <section
      id="about"
      className="py-20 transition-colors bg-rose-50 dark:bg-stone-900 md:py-28"
    >
      <div className="max-w-4xl px-6 mx-auto">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 text-center md:text-left"
          >
            <p className="mb-4 text-xs font-medium tracking-[0.25em] uppercase text-rose-500 dark:text-rose-400">
              Open to work
            </p>

            <h1 className="text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-100 md:text-6xl">
              Oleg Pykhonin
            </h1>

            <p className="mt-3 text-sm font-medium tracking-[0.15em] uppercase text-stone-400 dark:text-stone-500">
              Frontend Developer
            </p>

            <div className="w-10 h-px mx-auto mt-6 bg-rose-300 md:mx-0 dark:bg-rose-800" />

            <div className="flex flex-wrap justify-center gap-3 mt-8 md:justify-start">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase text-white transition-colors duration-300 rounded-full bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-1 focus:ring-rose-400 focus:ring-offset-2"
              >
                <Mail size={14} />
                Contact me
              </button>

              {cv && (
                <a
                  href={cv.href}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-300 border rounded-full border-stone-300 text-stone-600 hover:border-rose-400 hover:text-rose-500 dark:border-stone-700 dark:text-stone-400 dark:hover:border-rose-800 dark:hover:text-rose-400"
                >
                  <Download size={14} />
                  Download CV
                </a>
              )}
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="relative flex-shrink-0"
          >
            <img
              src="/oleg-photo.jpg"
              alt="Oleg Pykhonin"
              fetchPriority="high"
              decoding="async"
              className="relative z-10 object-cover border border-white rounded-full shadow-sm w-44 h-44 md:h-56 md:w-56 dark:border-stone-800"
            />
            <div className="absolute border rounded-full -inset-2 -z-0 border-rose-200 dark:border-rose-900" />
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default About;
