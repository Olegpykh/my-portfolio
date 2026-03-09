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
      className="py-16 transition-colors bg-rose-50 dark:bg-stone-900 md:py-24"
    >
      <div className="max-w-4xl px-6 mx-auto">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-rose-100 text-rose-500 dark:bg-rose-900/40 dark:text-rose-400">
              Open to work
            </span>

            <h1 className="text-4xl font-bold text-stone-800 dark:text-stone-100 md:text-5xl">
              Oleg Pykhonin
            </h1>

            <p className="mt-2 text-xl font-light text-stone-400 dark:text-stone-500">
              Frontend Developer
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8 md:justify-start">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
              >
                <Mail size={16} />
                Contact me
              </button>

              {cv && (
                <a
                  href={cv.href}
                  download
                  className="inline-flex items-center gap-2 rounded-full border-2 border-rose-200 px-5 py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:border-rose-400 hover:bg-rose-50 dark:border-rose-800 dark:text-rose-400 dark:hover:border-rose-600 dark:hover:bg-rose-950/30"
                >
                  <Download size={16} />
                  Download CV
                </a>
              )}
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <img
              src="/oleg-photo.jpg"
              alt="Oleg Pykhonin"
              className="object-cover w-40 h-40 border-4 border-white rounded-full shadow-xl md:h-52 md:w-52 dark:border-stone-800"
            />
            <div className="absolute border-2 border-dashed rounded-full -inset-2 -z-10 border-rose-200 dark:border-rose-900" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
