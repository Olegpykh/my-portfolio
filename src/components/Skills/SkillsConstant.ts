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
    skills: ['Git', 'GitHub', 'CI/CD', 'Vercel', 'ESLint', 'Prettier', 'NPM'],
  },
  {
    title: 'Testing',
    icon: '🧪',
    skills: ['Jest', 'React Testing Library'],
  },
  {
    title: 'Auth & Integrations',
    icon: '🔐',
    skills: ['Clerk (Sign-in / Sign-up)', 'Fetch API'],
  },
  {
    title: 'Practices',
    icon: '📐',
    skills: [
      'Mobile-First',
      'Code Splitting',
      'Lazy Loading',
      'Agile',
      'Scrum',
      'Jira',
      'Trello',
    ],
  },
];
