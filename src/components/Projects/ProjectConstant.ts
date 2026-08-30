type ProjectMeta = {
  image: string;
  tags: string[];
  github: string;
  live: string;
};

// title/description come from translations (see projects.list in
// en.json / de.json) — same array order as PROJECTS_META below.
export const PROJECTS_META: ProjectMeta[] = [
  {
    image: '/sports-apparel-store.png',
    tags: ['Next.js 16', 'TypeScript', 'Shopify GraphQL', 'Tailwind CSS'],
    github: 'https://github.com/Olegpykh/studio-store',
    live: 'https://studio-store-psi.vercel.app/',
  },
  {
    image: '/trailer.png',
    tags: ['React', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Clerk'],
    github: 'https://github.com/Olegpykh/MovieTrailer',
    live: 'https://movie-trailer-eight-indol.vercel.app/',
  },
  {
    image: '/lingo-crm.png',
    tags: ['Next.js', 'TypeScript', 'MUI', 'Zustand', 'dnd-kit', 'next-intl'],
    github: 'https://github.com/Olegpykh/lingo-crm',
    live: 'https://lingo-crm.vercel.app',
  },
  {
    image: '/italian-kitchen.png',
    tags: ['Next.js', 'Prisma', 'Auth.js', 'Zustand', 'Tailwind CSS'],
    github: 'https://github.com/Olegpykh/italian-kitchen',
    live: 'https://italian-kitchen.vercel.app',
  },
];
