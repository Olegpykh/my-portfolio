import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from './ProjectConstant';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 overflow-hidden transition-colors bg-rose-50 dark:bg-stone-900 md:py-24"
    >
      <div className="max-w-4xl px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-rose-400 dark:text-rose-500">
            What I've built
          </p>
          <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl text-stone-800 dark:text-stone-100">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col overflow-hidden transition-all duration-300 border group bg-rose-50 dark:bg-stone-900 border-rose-100 dark:border-stone-800 rounded-2xl hover:shadow-xl hover:shadow-rose-100/60 dark:hover:shadow-none"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-stone-100 dark:bg-stone-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="mb-2 text-lg font-bold text-stone-800 dark:text-stone-100">
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
                    className="inline-flex items-center justify-center flex-1 gap-2 px-4 py-2 text-xs font-bold text-white transition-all rounded-xl bg-stone-800 dark:bg-stone-100 dark:text-stone-900 hover:bg-rose-500 dark:hover:bg-rose-500 dark:hover:text-white active:scale-95"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center flex-1 gap-2 px-4 py-2 text-xs font-bold transition-all border rounded-xl border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-rose-300 hover:text-rose-500 active:scale-95"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
