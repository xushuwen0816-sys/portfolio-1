import React from 'react';
import { SectionProps } from '../types';

export const Footer: React.FC<SectionProps> = ({ t }) => {
  return (
    <footer className="py-8 text-center text-slate-400 text-sm glass-panel border-t border-white/20">
      <p>{t.footer.copyright}</p>
    </footer>
  );
};