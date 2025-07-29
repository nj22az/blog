import { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, BookOpen, User, Mail, ExternalLink } from "lucide-react";
import * as Icons from "lucide-react";
import { fetchSiteSettings, SanitySiteSettings, SanityNavLink } from "@/services/sanity-api";
import { CompactLogo } from "@/components/CompactLogo";

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

  // Define distinct colors for each navigation item
  const getIconColor = (icon: string, active: boolean) => {
    const colors = {
      home: active ? 'text-blue-600' : 'text-blue-500 hover:text-blue-600',
      'book-open': active ? 'text-green-600' : 'text-green-500 hover:text-green-600', 
      user: active ? 'text-purple-600' : 'text-purple-500 hover:text-purple-600',
      mail: active ? 'text-orange-600' : 'text-orange-500 hover:text-orange-600',
    };
    return colors[icon as keyof typeof colors] || (active ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900');
  };

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

  // Navigation items from Sanity or fallback
  const navItems: SanityNavLink[] = siteSettings?.navLinks?.filter(item => item.showInHeader) || [
    { title: "Home", href: "/", icon: "home", showInHeader: true },
    { title: "Blog", href: "/blog", icon: "book-open", showInHeader: true },
    { title: "About", href: "/about", icon: "user", showInHeader: true },
    { title: "Contact", href: "/contact", icon: "mail", showInHeader: true },
  ];

  if (loading) {
    return (
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="animate-pulse text-sm text-neutral-400">Loading...</div>
            <div className="w-6 h-6 animate-pulse bg-neutral-200 rounded-md"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <CompactLogo siteSettings={siteSettings} />

          {/* Right: Navigation */}
          <nav className="flex items-center gap-1">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ title, href, icon }) => {
                const Icon = getIcon(icon);
                const active = isActive(href);
                const iconColorClass = getIconColor(icon || '', active);
                
                return (
                  <Link
                    key={href}
                    to={href}
                    className={`
                      flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                      ${active 
                        ? 'bg-neutral-100' 
                        : 'hover:bg-neutral-50'
                      }
                    `}
                    title={title}
                  >
                    <Icon className={`h-4 w-4 ${iconColorClass}`} />
                    <span className={`hidden lg:block ${active ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'} transition-colors duration-200`}>
                      {title}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-neutral-200">
            <nav className="flex flex-col gap-1">
              {navItems.map(({ title, href, icon }) => {
                const Icon = getIcon(icon);
                const active = isActive(href);
                const iconColorClass = getIconColor(icon || '', active);
                
                return (
                  <Link
                    key={href}
                    to={href}
                    onClick={closeMenu}
                    className={`
                      flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-md transition-colors duration-200
                      ${active 
                        ? 'bg-neutral-100' 
                        : 'hover:bg-neutral-50'
                      }
                    `}
                  >
                    <Icon className={`h-4 w-4 ${iconColorClass}`} />
                    <span className={`${active ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'} transition-colors duration-200`}>
                      {title}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;