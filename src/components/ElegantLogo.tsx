import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '@/services/sanity';
import { SanitySiteSettings } from '@/services/sanity-api';

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

        {/* Text Logo (shown when no image OR when showTextWithLogo is true) */}
        {(!hasLogo || showTextWithLogo) && (
          <div className="flex flex-col leading-tight">
            <span className={titleClasses}>
              {siteSettings?.siteTitle || "The Office"}
            </span>
            {siteSettings?.siteSubtitle && (
              <span className={subtitleClasses}>
                {siteSettings.siteSubtitle}
              </span>
            )}
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