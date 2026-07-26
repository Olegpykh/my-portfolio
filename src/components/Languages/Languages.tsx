import { m } from 'framer-motion';
import { LANGUAGES } from './LanguagesConstant';

const Languages = () => {
  return (
    <section
      id="languages"
      className="py-16 transition-colors bg-white border-b border-rose-100 dark:border-stone-800 dark:bg-stone-950 md:py-24"
    >
      <div className="max-w-4xl px-6 mx-auto">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs font-medium tracking-[0.25em] uppercase text-rose-500 dark:text-rose-400">
            Communication
          </p>
          <h2 className="mb-10 text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl">
            Languages
          </h2>
        </m.div>

        <div className="flex flex-col max-w-md gap-8">
          {LANGUAGES.map(({ name, level, percent }) => (
            <div key={name} className="group">
              <div className="flex items-baseline justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-base font-medium tracking-tight transition-colors duration-300 text-stone-800 dark:text-stone-200 group-hover:text-rose-500">
                    {name}
                  </span>

                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:-translate-y-0">
                    {percent}%
                  </span>
                </div>

                <span className="text-xs font-medium tracking-widest uppercase text-rose-400 dark:text-rose-500">
                  {level}
                </span>
              </div>

              <div className="relative w-full h-2 overflow-hidden border rounded-full bg-rose-50 dark:bg-stone-900 border-rose-100/50 dark:border-stone-800">
                <m.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-rose-400 dark:bg-rose-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
