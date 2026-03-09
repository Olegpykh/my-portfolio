import { motion } from 'framer-motion';
import { LANGUAGES } from './LanguagesConstant';

const Languages = () => {
  return (
    <section
      id="languages"
      className="py-16 transition-colors bg-white border-b border-rose-100 dark:border-stone-800 dark:bg-stone-950 md:py-24"
    >
      <div className="max-w-4xl px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-rose-400 dark:text-rose-500">
            Communication
          </p>
          <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl text-stone-800 dark:text-stone-100">
            Languages
          </h2>
        </motion.div>

        <div className="flex flex-col max-w-md gap-8">
          {LANGUAGES.map(({ name, level, percent }) => (
            <div key={name} className=" group">
              <div className="flex items-baseline justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold tracking-tight transition-colors duration-300 text-stone-700 dark:text-stone-200 group-hover:text-rose-500">
                    {name}
                  </span>

                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:-translate-y-0">
                    {percent}%
                  </span>
                </div>

                <span className="text-xs font-black tracking-widest uppercase text-rose-400 dark:text-rose-500">
                  {level}
                </span>
              </div>

              <div className="relative w-full h-3 overflow-hidden border rounded-full bg-rose-50 dark:bg-stone-900 border-rose-100/50 dark:border-stone-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  viewport={{ once: false}}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full transition-all duration-300 rounded-full bg-gradient-to-r from-rose-300 to-rose-500 dark:from-rose-600 dark:to-rose-400 group-hover:brightness-110"
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
