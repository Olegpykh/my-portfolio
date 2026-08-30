import type { Variants } from 'framer-motion';

export const EXPERIENCE_META = [
  {
    id: 0,
    tech: [
      'React 18',
      'Next.js 16',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS v4',
      'GraphQL',
      'Axios',
      'Git',
    ],
  },
  {
    id: 2,
    tech: ['JavaScript', 'jQuery', 'HTML5/CSS3', 'Git'],
  },
] as const;

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
