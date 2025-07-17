import { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, BookOpen, User, Mail, ExternalLink } from "lucide-react";
import * as Icons from "lucide-react";
import { fetchSiteSettings, SanitySiteSettings, SanityNavLink } from "@/services/sanity-api";
import { usePremiumAnimations } from "@/hooks/usePremiumAnimations";
import { ElegantLogo } from "@/components/ElegantLogo";

// Icon mapping for Lucide icons
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  home: Home,
  'book-open': BookOpen,
  user: User,
  mail: Mail,
  'external-link': ExternalLink,
};

const getIcon = (iconName?: string) => {
  if (!iconName) return Home;
  return iconMap[iconName] || (Icons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>)[iconName] || Home;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [siteSettings, setSiteSettings] = useState<SanitySiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { fadeIn, slideUp } = usePremiumAnimations();

  useEffect(() => {
    const loadSiteSettings = async () => {
      try {
        const settings = await fetchSiteSettings();
        setSiteSettings(settings);
      } catch (error) {
        console.error('Error loading site settings:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSiteSettings();
  }, []);


  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  const getHeaderStyles = () => {
    return "fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 transition-all duration-150";
  };


  const getNavItemStyles = (href: string) => {
    const active = isActive(href);
    
    let navClasses = "flex items-center space-x-2 px-4 py-2 mx-1 rounded-sm transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px] min-w-[44px] font-medium text-base";
    
    if (active) {
      navClasses += " bg-accent text-white";
    } else {
      navClasses += " text-neutral-700 hover:text-neutral-900 focus:ring-accent";
    }
    
    return navClasses;
  };

  // Navigation items from Sanity or fallback
  const navItems: SanityNavLink[] = siteSettings?.navLinks?.filter(item => item.showInHeader) || [
    { title: "Home", href: "/", icon: "home", showInHeader: true },
    { title: "Blog", href: "/blog", icon: "book-open", showInHeader: true },
    { title: "About", href: "/about", icon: "user", showInHeader: true },
    { title: "Contact", href: "/contact", icon: "mail", showInHeader: true },
  ];

  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
        <div className="h-16 flex items-center justify-center">
          <div className="animate-pulse text-sm text-muted-foreground">Loading...</div>
        </div>
      </header>
    );
  }

  return (
    <header className={getHeaderStyles()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Elegant Logo */}
          <ElegantLogo 
            siteSettings={siteSettings} 
            className="flex-shrink-0"
          />
          
          {/* Navigation - Right (Desktop) */}
          <nav className="hidden md:flex items-center">
            {navItems.map(({ title, href, icon, description }) => {
              const Icon = getIcon(icon);
              return (
                <Link
                  key={href}
                  to={href}
                  className={getNavItemStyles(href)}
                  title={description || title}
                  aria-label={description || title}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-base">{title}</span>
                </Link>
              );
            })}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-3 rounded-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 min-h-[44px] min-w-[44px] transition-all duration-150" 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 shadow-sm">
          <nav className="max-w-7xl mx-auto px-6 py-6">
            <div className="space-y-2">
              {navItems.map(({ title, href, icon, description }) => {
                const Icon = getIcon(icon);
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    to={href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-sm transition-all duration-150 ease-out min-h-[44px] font-medium text-base ${
                      active 
                        ? 'bg-accent text-white' 
                        : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
                    } focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
                    title={description || title}
                    onClick={closeMenu}
                    aria-label={description || title}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-base">{title}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
