import { Mail, Github, Linkedin } from 'lucide-react';
import type { ReactNode } from 'react';

type SOCIAL = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const SOCIAL = [
  {
    label: 'GitHub',
    href: 'https://github.com/Olegpykh',
    icon: <Github size={20} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/oleg-pykhonin/',
    icon: <Linkedin size={20} />,
  },
  {
    label: 'Email',
    href: 'mailto:opykhonin@gmail.com',
    icon: <Mail size={20} />,
  },
] as const;

// CV differs by language — picked at render time based on the active locale.
// eslint-disable-next-line react-refresh/only-export-components
export const CV_FILES: Record<string, string> = {
  en: '/oleg_pykhonin_cv_en.pdf',
  de: '/oleg_pykhonin_cv_de.pdf',
};
