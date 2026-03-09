import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          }}
          viewport={{ amount: 0.4 }}
          className="mb-10"
        >
          <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-rose-400 dark:text-rose-500">
            What I work with
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-stone-800 dark:text-stone-100">
            Skills
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {SKILL_CATEGORIES.map(({ title, icon, skills }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 transition-colors bg-white border shadow-sm dark:bg-stone-950 border-rose-100 dark:border-stone-800 rounded-2xl hover:shadow-md"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{icon}</span>
                <h3 className="text-sm font-semibold tracking-wide text-stone-700 dark:text-stone-300">
                  {title}
                </h3>
              </div>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    className="px-3 py-1 text-xs font-medium border rounded-full bg-rose-50 dark:bg-stone-800 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-stone-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
