import React from 'react';
import { Link } from 'react-router-dom';
import { SanitySiteSettings } from '@/services/sanity-api';

interface CompactLogoProps {
  siteSettings: SanitySiteSettings | null;
  className?: string;
}

export const CompactLogo: React.FC<CompactLogoProps> = ({ siteSettings, className = '' }) => {
  return (
    <Link 
      to="/" 
      className={`flex items-center gap-2 focus:outline-none group ${className}`}
      aria-label={`${siteSettings?.siteTitle || 'Home'} - Navigate to homepage`}
    >
      {/* Compact Two-Row Text Logo */}
      <div className="flex flex-col leading-none">
        {/* First Row: "THE OFFICE" + "of" */}
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium text-neutral-800 tracking-wide uppercase transition-colors duration-200 group-hover:text-neutral-600">
            THE OFFICE
          </span>
          <span className="text-xs font-light text-neutral-500 tracking-wide lowercase italic transition-colors duration-200 group-hover:text-neutral-400">
            of
          </span>
        </div>
        
        {/* Second Row: "Nils Johansson" */}
        <div className="mt-0.5">
          <span className="text-base font-semibold text-neutral-900 tracking-tight transition-colors duration-200 group-hover:text-neutral-700">
            Nils Johansson
          </span>
        </div>
      </div>
    </Link>
  );
};