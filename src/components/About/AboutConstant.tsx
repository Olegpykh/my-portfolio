
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
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
    href: 'mailto:oleg.pykhonin@gmail.com',
    icon: <Mail size={20} />,
  },
  {
    label: 'CV',
    href: '/Oleg_Pykhonin_CV_EN.pdf',
    icon: <FileText size={20} />,
  },
] as const;

