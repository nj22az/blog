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
import { useScrollDirection } from '@/hooks/useScrollDirection';

// 🔒 DESIGN LOCK VERIFICATION
// const DESIGN_VERSION = '1.0';
// const DESIGN_LOCK_DATE = '2025-01-17';
// const AUTHORIZED_MODIFICATIONS = false; // Set to true only with explicit approval

interface ElegantLogoProps {
  siteSettings: SanitySiteSettings | null;
  className?: string;
  enableScrollBehavior?: boolean;
}

export const ElegantLogo: React.FC<ElegantLogoProps> = ({ siteSettings, className = '', enableScrollBehavior = false }) => {
  const { scrollDir, scrollY } = useScrollDirection();
  const logoStyle = siteSettings?.logoStyle;
  const logoImage = siteSettings?.logoImage;
  const hasLogo = logoImage?.asset;
  const logoHeight = logoImage?.height || 40;
  const showTextWithLogo = logoStyle?.showTextWithLogo || false;
  const spacing = logoStyle?.logoSpacing || 'comfortable';
  const position = logoStyle?.position || 'left';

  // Calculate visibility based on scroll direction and position (only if enabled)
  const isVisible = !enableScrollBehavior || scrollDir === "up" || scrollY < 100;

  // Responsive logo height scaling
  const getResponsiveHeight = () => {
    return {
      height: `${logoHeight}px`,
      minHeight: `${Math.max(logoHeight * 0.7, 28)}px`,
      maxHeight: `${logoHeight * 1.3}px`,
    };
  };

  // Apple Glass enhanced spacing classes
  const getSpacingClasses = () => {
    const base = 'transition-all duration-300 ease-out';
    switch (spacing) {
      case 'compact':
        return `${base} gap-3 px-3 py-2`;
      case 'spacious':
        return `${base} gap-8 px-6 py-4`;
      default: // comfortable
        return `${base} gap-5 px-4 py-3`;
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

  // Simplified container classes with optional scroll-based visibility
  const containerClasses = `
    elegant-logo
    ${enableScrollBehavior ? 'fixed top-4 left-4 z-50' : ''}
    flex items-center 
    ${getPositionClasses()} 
    ${enableScrollBehavior ? '' : getSpacingClasses()}
    ${enableScrollBehavior ? '' : 'focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 rounded-xl'}
    transition-all duration-300 ease-out
    ${enableScrollBehavior ? '' : 'hover:scale-[1.01]'}
    ${enableScrollBehavior && !isVisible ? 'opacity-0 -translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}
    ${className}
  `;

  // Text styling for elegance (preserved in design lock)
  // const titleClasses = `
  //   title
  //   text-xl sm:text-2xl 
  //   font-semibold 
  //   text-neutral-900 
  //   tracking-tight 
  //   leading-tight
  //   transition-colors duration-200
  // `;

  // const subtitleClasses = `
  //   subtitle
  //   text-sm sm:text-base 
  //   font-medium 
  //   text-neutral-600 
  //   tracking-wide 
  //   leading-tight 
  //   -mt-1
  //   transition-colors duration-200
  // `;

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

        {/* Apple Glass Enhanced Two-Row Text Logo */}
        {(!hasLogo || showTextWithLogo) && (
          <div className="flex flex-col leading-none apple-glass-layers group-hover:scale-[1.02] transition-all duration-300">
            {/* Parse title and subtitle for two-row layout */}
            {(() => {
              const title = siteSettings?.siteTitle || "The Office";
              const subtitle = siteSettings?.siteSubtitle || "Of Nils Johansson";
              
              // Split "The Office Of Nils Johansson" into elegant two-row format
              const isDefaultFormat = title.includes("Office") && subtitle.toLowerCase().includes("nils");
              
              if (isDefaultFormat) {
                return (
                  <>
                    {/* First Row: "The Office" + "Of" with enhanced spacing */}
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-800 tracking-[0.08em] uppercase transition-all duration-300 group-hover:text-neutral-700" 
                            style={{ 
                              textShadow: '0 1px 2px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.3)',
                              background: 'linear-gradient(135deg, hsl(var(--neutral-800)) 0%, hsl(var(--neutral-600)) 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}>
                        THE OFFICE
                      </span>
                      <span className="text-lg sm:text-xl lg:text-2xl font-light text-neutral-500 tracking-[0.05em] lowercase italic transition-all duration-300 group-hover:text-accent"
                            style={{ 
                              textShadow: '0 0.5px 1px rgba(255, 255, 255, 0.6)'
                            }}>
                        of
                      </span>
                    </div>
                    
                    {/* Second Row: "Nils Johansson" with enhanced prominence */}
                    <div className="ml-1">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight transition-all duration-300 group-hover:scale-105"
                            style={{ 
                              textShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(255, 255, 255, 0.4)',
                              background: 'linear-gradient(135deg, hsl(var(--neutral-900)) 0%, hsl(var(--neutral-700)) 50%, hsl(var(--neutral-900)) 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}>
                        Nils Johansson
                      </span>
                    </div>
                  </>
                );
              } else {
                // Fallback for custom titles with Apple Glass styling
                return (
                  <>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-800 tracking-[0.08em] uppercase transition-all duration-300 group-hover:text-neutral-700"
                            style={{ 
                              textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
                              background: 'linear-gradient(135deg, hsl(var(--neutral-800)) 0%, hsl(var(--neutral-600)) 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}>
                        {title.toUpperCase()}
                      </span>
                    </div>
                    {subtitle && (
                      <div className="ml-1">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight transition-all duration-300 group-hover:scale-105"
                              style={{ 
                                textShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(255, 255, 255, 0.4)',
                                background: 'linear-gradient(135deg, hsl(var(--neutral-900)) 0%, hsl(var(--neutral-700)) 50%, hsl(var(--neutral-900)) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}>
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

      {/* Apple Glass enhanced secondary content */}
      {position === 'left-text-right' && (
        <div className="flex items-center apple-glass-ultra rounded-xl px-3 py-2 border border-white/10">
          <span className="text-sm font-medium text-neutral-600 hidden sm:block tracking-wide"
                style={{ 
                  textShadow: '0 0.5px 1px rgba(255, 255, 255, 0.5)'
                }}>
            Portfolio & Insights
          </span>
        </div>
      )}
    </div>
  );
};

export default ElegantLogo;