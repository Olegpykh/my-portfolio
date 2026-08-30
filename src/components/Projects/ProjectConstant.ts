type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'Sports Apparel Store',
    description:
      'Headless e-commerce storefront powered by the Shopify Storefront GraphQL API, with server-rendered product pages and a full cart flow — Shopify owns the commerce data, Next.js owns the entire UI layer.',
    image: '/sports-apparel-store.png',
    tags: ['Next.js 16', 'TypeScript', 'Shopify GraphQL', 'Tailwind CSS'],
    github: 'https://github.com/Olegpykh/studio-store',
    live: 'https://studio-store-psi.vercel.app/',
  },
  {
    title: 'MovieTrailer',
    description:
      'Movie & TV explorer with search, universal detail pages for both movies and shows, trailer playback, streaming provider info, and a personal watchlist — authenticated via Clerk.',
    image: '/trailer.png',
    tags: ['React', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Clerk'],
    github: 'https://github.com/Olegpykh/MovieTrailer',
    live: 'https://movie-trailer-eight-indol.vercel.app/',
  },
  {
    title: 'Lingo CRM',
    description:
      'CRM dashboard for freelance English tutors — student roster with search and CEFR-level filtering, a drag-and-drop weekly schedule (dnd-kit), and per-student pages tracking progress, attendance, and payment status. Localized in German and English.',
    image: '/lingo-crm.png',
    tags: ['Next.js', 'TypeScript', 'MUI', 'Zustand', 'dnd-kit', 'next-intl'],
    github: 'https://github.com/Olegpykh/lingo-crm',
    live: 'https://lingo-crm.vercel.app',
  },
  {
    title: 'Italian Kitchen',
    description:
      'Recipe management platform with authenticated personal recipe books and saved collections, built on Server Actions and Zustand for client state.',
    image: '/italian-kitchen.png',
    tags: ['Next.js', 'Prisma', 'Auth.js', 'Zustand', 'Tailwind CSS'],
    github: 'https://github.com/Olegpykh/italian-kitchen',
    live: 'https://italian-kitchen.vercel.app',
  },
];
