const EXPERIENCE = [
  {
    id: 0,
    role: 'Frontend Developer (React)',
    company: 'Fusion Tech (Outstaffing)',
    location: 'Berlin · Remote',
    period: 'März 2023 – heute',
    bullets: [
      'Entwicklung und Pflege von React/TypeScript-UI-Komponenten für Kundenprojekte — pixelgenaue Umsetzung von Figma-Designs in responsive, mobile-first Interfaces mit Tailwind CSS.',
      'Integration von REST-APIs mit Axios: Loading States, Error Handling und TypeScript-Interfaces für alle API-Responses — stabile UI auch bei unerwarteten Datenformaten.',
      'State Management mit Redux Toolkit und createAsyncThunk — Remote-Daten im globalen Store gecacht, redundante API-Aufrufe bei wiederholter Navigation vermieden.',
      'Clientseitige Filterung und Suche mit URL-Parameter-Synchronisation implementiert — Nutzer können vorgefilterte Ansichten per Link teilen.',
      'Git Feature-Branch-Workflow: feature branches → Pull Requests → Code Review → Merge in develop. Agile/Scrum-Sprints mit Jira und täglichen Standups.',
    ],
    tech: [
      'React 18',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Axios',
      'Git',
      'Figma',
      'Jira',
      'Vercel',
    ],
  },
  {
    id: 1,
    role: 'Junior Frontend Developer',
    company: 'DEFA',
    location: 'Moskau',
    period: '2014 – 2016',
    bullets: [
      'Entwicklung von UI-Komponenten mit HTML5, CSS3 und jQuery für Enterprise-Kunden.',
      'Research und Anwendung von CSS-Fixes für Cross-Browser-Kompatibilität (IE8/9 Support).',
      'Eigenverantwortliche Umsetzung von Landing-Page-Features innerhalb von Sprint-Zyklen.',
    ],
    tech: ['JavaScript', 'jQuery', 'HTML5/CSS3', 'Git'],
  },
  {
    id: 2,
    role: 'Schauspieler',
    company: 'Selbstständig',
    location: 'Berlin',
    period: '2016 – 2023',
    bullets: [
      'Durchführung von Schauspiel-Workshops für Kinder.',
      'Mitwirkung in großen TV- und Streaming-Produktionen.',
    ],
    tech: [],
  },
];

export default EXPERIENCE;

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
