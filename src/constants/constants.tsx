import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

type SkillCategory = {
  titleKey: string;
  icon: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    titleKey: 'skills.categories.languages',
    icon: '📝',
    skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    titleKey: 'skills.categories.frameworks',
    icon: '⚛️',
    skills: [
      'React 18/19',
      'Next.js 16 (App Router, Server Actions)',
      'Vite',
      'React Router',
    ],
  },
  {
    titleKey: 'skills.categories.state',
    icon: '🗃️',
    skills: ['Redux', 'Redux Toolkit', 'Zustand', 'React Hook Form', 'Zod'],
  },
  {
    titleKey: 'skills.categories.styling',
    icon: '🎨',
    skills: [
      'Tailwind CSS v4',
      'MUI (Material UI)',
      'Framer Motion',
      'next-themes',
    ],
  },
  {
    titleKey: 'skills.categories.apiTools',
    icon: '🔌',
    skills: [
      'GraphQL (Shopify Storefront API)',
      'REST API',
      'Prisma',
      'Auth.js / NextAuth',
      'Clerk',
      'Axios',
      'Fetch API',
    ],
  },
  {
    titleKey: 'skills.categories.testingTools',
    icon: '🛠️',
    skills: [
      'Jest',
      'React Testing Library',
      'Git',
      'GitHub',
      'GitHub Actions',
      'react-i18next / next-intl',
      'dnd-kit',
      'ESLint',
      'Prettier',
      'Agile',
      'Scrum',
      'Jira',
    ],
  },
] as const;

type ContactItem = {
  icon: React.ReactNode;
  labelKey: string;
  value?: string;
  valueKey?: string;
  href?: string;
  isEmail?: boolean;
};

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: <Mail size={20} />,
    labelKey: 'contact.items.email',
    value: 'oleg.pykhonin@gmail.com',
    href: 'mailto:oleg.pykhonin@gmail.com',
    isEmail: true,
  },
  {
    icon: <Phone size={20} />,
    labelKey: 'contact.items.phone',
    value: '+49 176 43564301',
    href: 'tel:+4917643564301',
  },
  {
    icon: <MapPin size={20} />,
    labelKey: 'contact.items.location',
    valueKey: 'contact.items.locationValue',
  },
  {
    icon: <Github size={20} />,
    labelKey: 'contact.items.github',
    value: 'github.com/Olegpykh',
    href: 'https://github.com/Olegpykh',
  },
  {
    icon: <Linkedin size={20} />,
    labelKey: 'contact.items.linkedin',
    value: 'linkedin.com/in/oleg-pykhonin',
    href: 'https://www.linkedin.com/in/oleg-pykhonin',
  },
] as const;
