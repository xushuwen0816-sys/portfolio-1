import React from 'react';
import { SectionProps } from '../types';

export const Footer: React.FC<SectionProps> = ({ t }) => {
  return (
    <footer className="py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
      <p>{t.footer.copyright}</p>
    </footer>
  );
};