import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { fetchHero, fetchSanityAuthors, SanityHero, SanityAuthor } from '@/services/sanity-api';
import { urlFor } from '@/services/sanity';
import { usePremiumAnimations } from '@/hooks/usePremiumAnimations';
import { japaneseDesignSystem } from '@/lib/japanese-design-tokens';

const Hero: React.FC = () => {
  const [hero, setHero] = useState<SanityHero | null>(null);
  const [authors, setAuthors] = useState<SanityAuthor[]>([]);
  const [loading, setLoading] = useState(true);
  const { fadeIn, slideUp } = usePremiumAnimations();

  useEffect(() => {
    const loadHeroData = async () => {
      try {
        const [heroData, authorsData] = await Promise.all([
          fetchHero(),
          fetchSanityAuthors()
        ]);
        
        setHero(heroData);
        setAuthors(authorsData);
      } catch (error) {
        console.error('Error loading hero data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadHeroData();
  }, []);

  if (loading) {
    return (
      <div className="h-96 bg-gray-100 flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!hero) {
    return (
      <div className="h-96 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome</h1>
          <p className="text-xl text-gray-600">Configure your hero section in Sanity Studio</p>
        </div>
      </div>
    );
  }

  // Helper functions
  const getHeightClass = () => {
    switch (hero.heroHeight) {
      case 'screen':
        return 'h-screen';
      case 'large':
        return 'h-[600px]';
      case 'medium':
        return 'h-[400px]';
      case 'small':
        return 'h-[300px]';
      default:
        return 'h-[600px]';
    }
  };

  const getTextAlignmentClass = () => {
    switch (hero.textAlignment) {
      case 'left':
        return 'text-left';
      case 'right':
        return 'text-right';
      case 'center':
      default:
        return 'text-center';
    }
  };

  const getOverlayStyle = () => {
    if (!hero.backgroundOverlay?.enabled) return {};
    
    const opacity = hero.backgroundOverlay.opacity || 0.4;
    let color = 'rgb(0, 0, 0)';
    
    switch (hero.backgroundOverlay.color) {
      case 'blue':
        color = 'rgb(30, 64, 175)';
        break;
      case 'gray':
        color = 'rgb(75, 85, 99)';
        break;
      case 'black':
      default:
        color = 'rgb(0, 0, 0)';
    }
    
    return {
      backgroundColor: `rgba(${color.match(/\d+/g)?.join(', ')}, ${opacity})`
    };
  };

  const getButtonStyles = () => {
    const baseClasses = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    switch (hero.ctaStyle) {
      case 'primary':
        return `${baseClasses} bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500`;
      case 'secondary':
        return `${baseClasses} bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 focus:ring-blue-500`;
      case 'glass':
        return `${baseClasses} glass-surface backdrop-blur-lg text-white border border-white/30 hover:bg-white/10 focus:ring-white/50`;
      case 'minimal':
        return `${baseClasses} bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white/70 focus:ring-white/50`;
      default:
        return `${baseClasses} bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500`;
    }
  };

  const isExternalLink = (link: string) => {
    return link.startsWith('http') || link.startsWith('https');
  };

  const backgroundImageUrl = urlFor(hero.backgroundImage)
    .width(1920)
    .height(1080)
    .quality(90)
    .url();

  const zenMode = hero.japaneseDesign?.enableZen;
  const emphasizeMa = hero.japaneseDesign?.emphasizeMa;
  const subtleAnimations = hero.japaneseDesign?.subtleAnimations;

  return (
    <section
      className={`relative ${getHeightClass()} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      {hero.backgroundOverlay?.enabled && (
        <div 
          className="absolute inset-0 z-10"
          style={getOverlayStyle()}
        />
      )}

      {/* Content */}
      <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className={`${getTextAlignmentClass()} ${emphasizeMa ? 'space-y-12' : 'space-y-6'}`}>
          {/* Headline */}
          <div {...(subtleAnimations ? fadeIn({ delay: 0 }) : {})}>
            <h1 
              className={`font-bold text-white drop-shadow-lg ${
                zenMode 
                  ? 'text-3xl md:text-5xl lg:text-6xl' 
                  : 'text-4xl md:text-5xl lg:text-7xl'
              }`}
              style={{
                fontFamily: zenMode ? japaneseDesignSystem.typography.fontFamily.primary : 'inherit',
                lineHeight: zenMode ? japaneseDesignSystem.typography.lineHeight.tight : 'inherit'
              }}
            >
              {hero.headline}
            </h1>
          </div>

          {/* Subheadline */}
          {hero.subhead && (
            <div {...(subtleAnimations ? slideUp({ delay: 200 }) : {})}>
              <p 
                className={`text-white/90 drop-shadow-sm ${
                  zenMode 
                    ? 'text-lg md:text-xl lg:text-2xl max-w-2xl' 
                    : 'text-xl md:text-2xl lg:text-3xl max-w-3xl'
                } ${hero.textAlignment === 'center' ? 'mx-auto' : ''}`}
                style={{
                  fontFamily: zenMode ? japaneseDesignSystem.typography.fontFamily.primary : 'inherit',
                  lineHeight: zenMode ? japaneseDesignSystem.typography.lineHeight.relaxed : 'inherit'
                }}
              >
                {hero.subhead}
              </p>
            </div>
          )}

          {/* CTA Button */}
          {hero.ctaText && hero.ctaLink && (
            <div {...(subtleAnimations ? slideUp({ delay: 400 }) : {})}>
              <div className={emphasizeMa ? 'mt-12' : 'mt-8'}>
                {isExternalLink(hero.ctaLink) ? (
                  <a
                    href={hero.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={getButtonStyles()}
                  >
                    {hero.ctaText}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    to={hero.ctaLink}
                    className={getButtonStyles()}
                  >
                    {hero.ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Author avatars */}
          {hero.showAuthors && authors.length > 0 && (
            <div {...(subtleAnimations ? fadeIn({ delay: 600 }) : {})}>
              <div className={`flex ${hero.textAlignment === 'center' ? 'justify-center' : hero.textAlignment === 'right' ? 'justify-end' : 'justify-start'} space-x-4 ${emphasizeMa ? 'mt-16' : 'mt-8'}`}>
                {authors.map((author) => (
                  <div key={author._id} className="group">
                    <img
                      src={author.image ? urlFor(author.image).width(80).height(80).url() : '/api/placeholder/80/80'}
                      alt={author.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border-3 border-white shadow-lg transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="mt-2 text-center">
                      <p className="text-white/90 text-sm font-medium drop-shadow-sm">
                        {author.name}
                      </p>
                      {author.subtitle && (
                        <p className="text-white/70 text-xs drop-shadow-sm">
                          {author.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator (optional) */}
      {hero.heroHeight === 'screen' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;