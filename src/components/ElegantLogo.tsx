/**
 * 🔒 ELEGANT LOGO COMPONENT - DESIGN LOCKED
 * 
 * ⚠️  CRITICAL WARNING: This component implements the final approved logo design.
 * ⚠️  Modifications are PROHIBITED without explicit authorization.
 * ⚠️  See LOGO_DESIGN_LOCK.md for complete specifications.
 * 
 * Final Design: Two-row elegant typography with sophisticated hierarchy
 * - ROW 1: "The Office" (light, neutral-700, uppercase) + "of" (extralight, neutral-500, italic)  
 * - ROW 2: "Nils Johansson" (semibold, neutral-900, prominent)
 * 
 * Features: Responsive scaling, elegant hover effects, e-ink optimization
 * Status: LOCKED ✅ (v1.0 - 2025-01-17)
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '@/services/sanity';
import { SanitySiteSettings } from '@/services/sanity-api';

// 🔒 DESIGN LOCK VERIFICATION
const DESIGN_VERSION = '1.0';
const DESIGN_LOCK_DATE = '2025-01-17';
const AUTHORIZED_MODIFICATIONS = false; // Set to true only with explicit approval

interface ElegantLogoProps {
  siteSettings: SanitySiteSettings | null;
  className?: string;
}

export const ElegantLogo: React.FC<ElegantLogoProps> = ({ siteSettings, className = '' }) => {
  const logoStyle = siteSettings?.logoStyle;
  const logoImage = siteSettings?.logoImage;
  const hasLogo = logoImage?.asset;
  const logoHeight = logoImage?.height || 40;
  const showTextWithLogo = logoStyle?.showTextWithLogo || false;
  const spacing = logoStyle?.logoSpacing || 'comfortable';
  const position = logoStyle?.position || 'left';

  // Responsive logo height scaling
  const getResponsiveHeight = () => {
    return {
      height: `${logoHeight}px`,
      minHeight: `${Math.max(logoHeight * 0.7, 28)}px`,
      maxHeight: `${logoHeight * 1.3}px`,
    };
  };

  // Spacing classes based on setting
  const getSpacingClasses = () => {
    const base = 'transition-all duration-300 ease-out';
    switch (spacing) {
      case 'compact':
        return `${base} gap-2 px-1 py-1`;
      case 'spacious':
        return `${base} gap-6 px-4 py-3`;
      default: // comfortable
        return `${base} gap-4 px-3 py-2`;
    }
  };

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'center':
        return 'justify-center text-center';
      case 'left-text-right':
        return 'justify-between w-full';
      default: // left
        return 'justify-start';
    }
  };

  // Container classes for elegant presentation
  const containerClasses = `
    elegant-logo
    flex items-center 
    ${getPositionClasses()} 
    ${getSpacingClasses()}
    focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 
    rounded-lg 
    hover:bg-neutral-50/50 
    transition-all duration-200 ease-out
    ${className}
  `;

  // Text styling for elegance
  const titleClasses = `
    title
    text-xl sm:text-2xl 
    font-semibold 
    text-neutral-900 
    tracking-tight 
    leading-tight
    transition-colors duration-200
  `;

  const subtitleClasses = `
    subtitle
    text-sm sm:text-base 
    font-medium 
    text-neutral-600 
    tracking-wide 
    leading-tight 
    -mt-1
    transition-colors duration-200
  `;

  return (
    <div className={containerClasses}>
      <Link 
        to="/" 
        className="flex items-center gap-3 focus:outline-none group"
        aria-label={`${siteSettings?.siteTitle || 'Home'} - Navigate to homepage`}
      >
        {/* Logo Image */}
        {hasLogo && (
          <div className="flex-shrink-0 relative">
            <img 
              src={urlFor(logoImage).height(logoHeight * 2).quality(100).format('webp').url()} 
              alt={logoImage.alt || siteSettings?.siteTitle || "Logo"}
              className="w-auto object-contain transition-all duration-300 ease-out group-hover:scale-105"
              style={getResponsiveHeight()}
              loading="eager"
              fetchPriority="high"
            />
            {/* Elegant glow effect on hover */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-accent blur-lg -z-10" />
          </div>
        )}

        {/* Elegant Two-Row Text Logo */}
        {(!hasLogo || showTextWithLogo) && (
          <div className="flex flex-col leading-none">
            {/* Parse title and subtitle for two-row layout */}
            {(() => {
              const title = siteSettings?.siteTitle || "The Office";
              const subtitle = siteSettings?.siteSubtitle || "Of Nils Johansson";
              
              // Split "The Office Of Nils Johansson" into elegant two-row format
              const isDefaultFormat = title.includes("Office") && subtitle.toLowerCase().includes("nils");
              
              if (isDefaultFormat) {
                return (
                  <>
                    {/* First Row: "The Office" + "Of" */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-light text-neutral-700 tracking-wider uppercase letter-spacing-widest">
                        The Office
                      </span>
                      <span className="text-base sm:text-lg lg:text-xl font-extralight text-neutral-500 tracking-wide lowercase italic">
                        of
                      </span>
                    </div>
                    
                    {/* Second Row: "Nils Johansson" */}
                    <div className="mt-1">
                      <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900 tracking-tight">
                        Nils Johansson
                      </span>
                    </div>
                  </>
                );
              } else {
                // Fallback for custom titles
                return (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-light text-neutral-700 tracking-wider uppercase letter-spacing-widest">
                        {title}
                      </span>
                    </div>
                    {subtitle && (
                      <div className="mt-1">
                        <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900 tracking-tight">
                          {subtitle}
                        </span>
                      </div>
                    )}
                  </>
                );
              }
            })()}
          </div>
        )}
      </Link>

      {/* Secondary content for left-text-right layout */}
      {position === 'left-text-right' && (
        <div className="flex items-center">
          <span className="text-sm font-medium text-neutral-500 hidden sm:block">
            Portfolio & Insights
          </span>
        </div>
      )}
    </div>
  );
};

export default ElegantLogo;