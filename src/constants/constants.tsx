import { Mail, Phone, MapPin, Github, Linkedin,  } from 'lucide-react';




type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Styling',
    icon: '🎨',
    skills: [
      'HTML5',
      'CSS3',
      'SCSS',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚛️',
    skills: [
      'React',
      'Redux',
      'Redux Toolkit',
      'React Router',
      'Axios',
      'REST API',
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    skills: [
      'Git',
      'GitHub',
      'CI/CD',
      'Vercel',
      'ESLint',
      'Prettier',
      'NPM',
      'Vite',
    ],
  },
  {
    title: 'Testing',
    icon: '🧪',
    skills: ['Jest', 'React Testing Library', 'Vitest'],
  },
  {
    title: 'Authentication & Integrations',
    icon: '🔐',
    skills: ['Clerk', 'NextAuth.js / Auth.js', 'Fetch API'],
  },
  {
    title: 'Practices & Methodologies',
    icon: '📐',
    skills: [
      'Mobile-First',
      'Responsive Design',
      'Code Splitting',
      'Lazy Loading',
      'Agile / Scrum',
      'Jira',
      'Trello / Linear',
    ],
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
