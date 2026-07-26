import { m } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../constants/constants';
import { cardVariants, skillVariants } from './SkillsVariants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
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
            What I work with
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl">
            Skills
          </h2>
        </m.div>

        <m.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {SKILL_CATEGORIES.map(({ title, icon, skills }) => (
            <m.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 transition-colors bg-white border shadow-sm dark:bg-stone-950 border-rose-100 dark:border-stone-800 rounded-2xl hover:shadow-md"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{icon}</span>
                <h3 className="text-sm font-medium tracking-wide text-stone-700 dark:text-stone-300">
                  {title}
                </h3>
              </div>

              <m.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {skills.map((skill) => (
                  <m.span
                    key={skill}
                    variants={skillVariants}
                    className="px-3 py-1 text-xs font-medium border rounded-full bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700"
                  >
                    {skill}
                  </m.span>
                ))}
              </m.div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default Skills;
