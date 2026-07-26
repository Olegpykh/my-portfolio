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
      'Headless e-commerce storefront powered by the Shopify Storefront GraphQL API, with server-rendered product pages and cart flow.',
    image: '/sports-apparel-store.png',
    tags: ['Next.js 16', 'TypeScript', 'Shopify GraphQL', 'Tailwind CSS'],
    github: 'https://github.com/Olegpykh/studio-store',
    live: 'https://studio-store-psi.vercel.app/',
  },
  {
    title: 'MovieTrailer',
    description:
      'Full SPA with movie search, detail pages, and trailer playback. Built with Redux Toolkit and Clerk auth.',
    image: '/trailer.png',
    tags: ['React', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Clerk'],
    github: 'https://github.com/Olegpykh/MovieTrailer',
    live: 'https://movie-trailer-eight-indol.vercel.app/',
  },
  {
    title: 'E-Commerce Store',
    description:
      'Full SPA with cart, checkout, and Clerk auth. Feature-Sliced Design architecture with Lazy Loading.',
    image: '/e-commerce.png',
    tags: ['React', 'Redux Toolkit', 'TypeScript', 'FSD', 'Tailwind CSS'],
    github: 'https://github.com/Olegpykh/ecommerce-store',
    live: 'https://ecommerce-store-hazel-rho.vercel.app',
  },
  {
    title: 'Italian Kitchen',
    description:
      'Recipe management platform with authentication, personal recipe books, and saved collections. Server Actions and Zustand for state.',
    image: '/italian-kitchen.png',
    tags: ['Next.js', 'Prisma', 'Auth.js', 'Zustand', 'Tailwind CSS'],
    github: 'https://github.com/Olegpykh/italian-kitchen',
    live: 'https://italian-kitchen.vercel.app',
  },
];
