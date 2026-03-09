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
    title: 'MovieTrailer',
    description:
      'Full SPA with movie search, detail pages, and trailer playback. Built with Redux Toolkit and Clerk auth.',
    image: '/public/trailer.png',
    tags: ['React', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Clerk'],
    github: 'https://github.com/Olegpykh/MovieTrailer',
    live: 'https://movie-trailer-eight-indol.vercel.app/',
  },
  {
    title: 'E-Commerce Store',
    description:
      'Full SPA with cart, checkout, and Clerk auth. Feature-Sliced Design architecture with Lazy Loading.',
    image: '/public/e-commerce.png',
    tags: ['React', 'Redux Toolkit', 'TypeScript', 'FSD', 'Tailwind CSS'],
    github: 'https://github.com/Olegpykh/ecommerce-store',
    live: 'https://ecommerce-store-hazel-rho.vercel.app',
  },
];
