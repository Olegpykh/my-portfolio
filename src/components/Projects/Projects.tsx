import { m } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from './ProjectConstant';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.94, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 1.15, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 overflow-hidden transition-colors bg-rose-50 dark:bg-stone-900 md:py-24"
    >
      <div className="max-w-5xl px-6 mx-auto">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs font-medium tracking-[0.25em] uppercase text-rose-600 dark:text-rose-400">
            What I've built
          </p>
          <h2 className="mb-10 text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl">
            Projects
          </h2>
        </m.div>

        <m.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
        >
          {PROJECTS.map((project) => (
            <m.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white border group dark:bg-stone-900 border-rose-100 dark:border-stone-800 rounded-2xl hover:shadow-lg hover:shadow-stone-200/60 dark:hover:shadow-none"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-stone-100 dark:bg-stone-800">
                <m.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  variants={imageVariants}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="mb-2 text-lg font-medium text-stone-900 dark:text-stone-100">
                  {project.title}
                </h3>

                <p className="flex-1 mb-4 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center flex-1 gap-2 px-4 py-2 text-xs font-medium text-white transition-colors rounded-xl bg-stone-900 dark:bg-stone-100 dark:text-stone-900 hover:bg-rose-500 dark:hover:bg-rose-500 dark:hover:text-white"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center flex-1 gap-2 px-4 py-2 text-xs font-medium transition-colors border rounded-xl border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-rose-300 hover:text-rose-500"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default Projects;
