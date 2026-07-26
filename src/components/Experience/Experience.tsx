import { m } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import EXPERIENCE from './ExperienceConstant';
import { containerVariants, itemVariants } from './ExperienceConstant';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 transition-colors bg-rose-50 dark:bg-stone-900/50"
    >
      <div className="max-w-4xl px-6 mx-auto">
        <m.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          }}
          viewport={{ amount: 0.6 }}
          className="mb-16"
        >
          <p className="mb-2 text-xs font-medium tracking-[0.25em] uppercase text-rose-500 dark:text-rose-400">
            Career
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl">
            Work Experience
          </h2>
        </m.div>

        <m.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <m.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            className="absolute top-0 bottom-0 hidden w-px duration-1000 origin-top left-4 bg-rose-200 dark:bg-stone-800 sm:block"
          />

          <div className="space-y-12">
            {EXPERIENCE.map((job) => (
              <m.div
                key={job.id}
                variants={itemVariants}
                className="relative sm:pl-14"
              >
                <div className="absolute left-0 z-10 items-center justify-center hidden w-8 h-8 bg-white border rounded-full sm:flex top-1 border-rose-200 dark:bg-stone-800 dark:border-stone-700">
                  <Briefcase
                    size={14}
                    className="text-rose-500 dark:text-rose-400"
                  />
                </div>

                <m.div
                  whileHover={{ x: 4 }}
                  className="p-8 transition-all bg-white border shadow-sm rounded-3xl border-rose-100 dark:bg-stone-800 dark:border-stone-700 hover:shadow-md"
                >
                  <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-medium text-stone-900 dark:text-stone-100">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm font-medium text-rose-500 dark:text-rose-400">
                        <span>{job.company}</span>
                        <span className="flex items-center gap-1 font-normal text-stone-400 dark:text-stone-500">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-stone-500 dark:text-stone-400 bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-700 rounded-full whitespace-nowrap self-start">
                      <Calendar size={13} />
                      {job.period}
                    </span>
                  </div>

                  <ul className="mb-8 space-y-4">
                    {job.bullets.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-stone-600 dark:text-stone-400"
                      >
                        <ChevronRight
                          size={16}
                          className="mt-1 text-rose-300 shrink-0"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {job.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-stone-100 dark:border-stone-700/50">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-stone-500 dark:text-stone-400 bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-700 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </m.div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
