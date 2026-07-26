import { m } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { STATS, SUMMARY_TEXT } from './SummaryConstant';

const Summary = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="summary"
      className="py-16 transition-colors bg-white border-b border-rose-100 dark:border-stone-800 dark:bg-stone-950"
    >
      <div className="max-w-4xl px-6 mx-auto">
        <m.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          }}
          viewport={{ amount: 0.4 }}
          className="mb-10"
        >
          <p className="mb-2 text-xs font-medium tracking-[0.25em] uppercase text-rose-500 dark:text-rose-400">
            Who I am
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl">
            Summary
          </h2>
        </m.div>

        <m.div
          className="grid grid-cols-3 gap-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {STATS.map(({ value, label }) => (
            <m.div
              key={label}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 text-center transition-colors border shadow-sm bg-rose-50 dark:bg-stone-900 border-rose-100 dark:border-stone-800 rounded-2xl hover:shadow-md"
            >
              <div className="text-3xl font-medium text-rose-500 dark:text-rose-400">
                {value}
              </div>
              <div className="mt-1 text-xs leading-snug text-stone-400 dark:text-stone-500">
                {label}
              </div>
            </m.div>
          ))}
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          }}
          viewport={{ amount: 0.4 }}
          className="max-w-2xl text-base leading-relaxed md:text-lg text-stone-500 dark:text-stone-400"
        >
          {SUMMARY_TEXT}
        </m.p>
      </div>
    </section>
  );
};

export default Summary;
