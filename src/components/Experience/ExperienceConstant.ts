  const EXPERIENCE = [
    {
      id: 0,
      role: 'Frontend Developer (React)',
      company: 'Fusion Tech (Outstaffing)',
      location: 'Berlin · Remote',
      period: 'seit Juli 2025',

      bullets: [
        'Entwicklung eines modularen API-Service-Layers für die Integration mit einem Headless-CMS (Strapi/Contentful) in einem SaaS-Projekt (EdTech/FinTech-Bereich).',
        'Erstellung typisierter Axios-Endpoints (Generic Fetcher mit Error-Handling & Fallback-Daten) für Artikel, Cases, FAQ, Promotions und dynamischen Content.',
        'Strukturierung in Modulen (articles.ts, cases.ts, faq.ts) mit Barrel-Exports und vollständiger TypeScript-Typisierung.',
        'Optimierung für Performance und Stabilität: Caching-Logik, Pagination-Support, populate=deep für relationale Daten.',
        'Beitrag: Beschleunigung der Content-Pflege um 2–3×, Reduzierung von Frontend-Bugs durch starke Typisierung und robuste Fehlerbehandlung.',
      ],
      tech: [
        'React 18',
        'TypeScript',
        'Axios',
        'Redux Toolkit',
        'Tailwind',
        'Vercel',
      ],
    },
    {
      id: 1,
      role: 'Junior Frontend Developer',
      company: 'DEFA',
      location: 'Moscow',
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
      role: 'Actor',
      company: 'Self-employed',
      location: 'Berlin',
      period: '2016 – 2023',
      bullets: [
        'Durchführung von Schauspiel-Workshops für Kinder.',
        'Mitwirkung in großen TV- und Streaming-Produktionen.',
      ],
      tech: [],
    },
  ];

export default EXPERIENCE

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