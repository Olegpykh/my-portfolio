import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      'HTML5',
      'CSS3',
      'SCSS',
      'Tailwind CSS v4',
      'JavaScript (ES6+)',
      'TypeScript',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚛️',
    skills: [
      'React 18',
      'Next.js 16 (App Router, Server Actions)',
      'Redux',
      'Redux Toolkit',
      'React Router',
      'React Hook Form',
      'NextAuth / Auth.js',
      'Zod',
    ],
  },
  {
    title: 'API & Tools',
    icon: '🔌',
    skills: [
      'GraphQL (Shopify Storefront API)',
      'REST API',
      'Axios',
      'Fetch API',
      'Git',
      'GitHub',
      'GitHub Actions',
      'Cursor',
      'GitHub Copilot',
      'Claude Code',
      'ESLint',
      'Prettier',
      'NPM',
    ],
  },
  {
    title: 'Testing & Methodik',
    icon: '🧪',
    skills: ['Jest', 'React Testing Library', 'Agile', 'Scrum', 'Jira'],
  },
] as const;

type ContactItem = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
};

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'oleg.pykhonin@gmail.com',
    href: 'mailto:oleg.pykhonin@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+49 176 43564301',
    href: 'tel:+4917643564301',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Berlin, Germany · Remote friendly',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/Olegpykh',
    href: 'https://github.com/Olegpykh',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/oleg-pykhonin',
    href: 'https://www.linkedin.com/in/oleg-pykhonin',
  },
] as const;
