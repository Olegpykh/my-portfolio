import { motion } from 'framer-motion';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_ITEMS } from '../../constants/constants';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 transition-colors bg-white dark:bg-stone-950 md:py-32"
    >
      <div className="max-w-4xl px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 text-xs font-bold tracking-[0.3em] uppercase text-rose-500">
            Contact
          </p>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl text-stone-900 dark:text-white">
            Get in <span className="text-rose-500">touch.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CONTACT_ITEMS.map(({ icon, label, value, href }, index) => {
            const isEmail = label.toLowerCase() === 'email';

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 transition-all border bg-stone-50/50 dark:bg-stone-900/40 border-stone-100 dark:border-stone-800 rounded-[2rem] hover:border-rose-200 dark:hover:border-rose-900/30 hover:bg-white dark:hover:bg-stone-900 shadow-sm hover:shadow-xl hover:shadow-rose-500/5"
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center justify-center w-12 h-12 transition-transform duration-500 bg-white shadow-sm rounded-2xl dark:bg-stone-800 text-rose-500 group-hover:scale-110 group-hover:rotate-3">
                    {icon}
                  </div>

                  {isEmail && (
                    <button
                      onClick={() => copyEmail(value)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950"
                    >
                      {copied ? <Check size={12} /> : <Copy size={12} />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  )}

                  {!isEmail && href && (
                    <ExternalLink
                      size={14}
                      className="transition-opacity opacity-0 group-hover:opacity-40 text-stone-500"
                    />
                  )}
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-black tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-bold break-all transition-colors text-stone-800 dark:text-stone-200 hover:text-rose-500 dark:hover:text-rose-400"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-bold tracking-tight uppercase text-stone-800 dark:text-stone-200">
                      {value}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center md:text-left"
        >
          <a
            href="mailto:oleg.pykhonin@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 text-sm font-black tracking-widest text-white uppercase transition-all shadow-lg bg-stone-900 dark:bg-rose-600 rounded-2xl hover:bg-rose-500 dark:hover:bg-rose-500 hover:-translate-y-1 active:scale-95 shadow-stone-200 dark:shadow-none"
          >
            <Mail size={18} />
            Start a conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
