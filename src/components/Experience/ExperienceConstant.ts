import type { Variants } from 'framer-motion';

const EXPERIENCE = [
  {
    id: 0,
    role: 'Frontend Developer (React)',
    company: 'Fusion Tech (Outstaffing)',
    location: 'Berlin · Remote',
    period: 'März 2023 – heute',
    bullets: [
      'Implementierte ein 8-stufiges Finder Tool mit localStorage-Persistenz und dynamischer Schritt-Logik in React und TypeScript.',
      'Entwickelte typisierte Axios-Services für die CMS-Anbindung mit Fehlerbehandlung, Retry-Logik und Fallback-Daten.',
      'Setzte responsive Layouts für 10+ strukturell unterschiedliche Seitentypen um — von komplexen Vergleichstabellen bis hin zu Multi-Step Wizards und Blog-Artikeln.',
      'Reduzierte Frontend-Bugs durch strikte TypeScript-Typisierung und aktive Beteiligung an Code-Reviews im agilen Team.',
      'Entwickelte filterbare und paginierte Produktlisten für 35+ Software-Kategorien mit dynamischer Datenanzeige.',
    ],
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
    role: 'Frontend Developer',
    company: 'DEFA',
    location: 'Moskau',
    period: 'März 2013 – Juli 2016',
    bullets: [
      'Entwicklung von UI-Komponenten und Landing Pages für 10+ Enterprise-Kunden mit HTML5, CSS3 und jQuery.',
      'Umsetzung responsiver, cross-browser-kompatibler Layouts (IE8/9, Chrome, Firefox) mit Mobile-First-Ansatz.',
      'Performance-Optimierung durch CSS-Minifizierung und JS-Bereinigung — Seitengröße um 20–25% reduziert.',
      'Eigenverantwortliche Umsetzung von Landing-Page-Features innerhalb von Sprint-Zyklen.',
    ],
    tech: ['JavaScript', 'jQuery', 'HTML5/CSS3', 'Git'],
  },
];

export default EXPERIENCE;

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
