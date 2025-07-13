import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, User, Mail } from "lucide-react";
import { NavItem } from "@types/index";

const navItems: NavItem[] = [
  { title: "Blog", href: "/", icon: BookOpen },
  { title: "About", href: "/about", icon: User },
  { title: "Contact", href: "/contact", icon: Mail },
];

const pageTitle: Record<string, string> = {
  "/about": "About Nils & Thuan",
  "/contact": "Let's Connect",
  "/experience": "Professional Journey",
  "/": "Engineering Insights",
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = useCallback(() => {
    if (location.pathname.startsWith('/blog/')) {
      return "Article";
    }
    return pageTitle[location.pathname] || "Engineering Insights";
  }, [location.pathname]);

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

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="flagship-grid h-16">
        <div className="flagship-container flex items-center justify-between">
          {/* Logo - Left */}
          <Link 
            to="/" 
            className="group flex items-center space-x-3 interactive-scale focus-ring rounded-lg p-2 -m-2"
          >
            <div className="flex flex-col">
              <span className="text-xl font-semibold leading-none transition-colors group-hover:opacity-80" style={{ color: 'hsl(var(--brand-primary))' }}>
                The Office
              </span>
              <span className="text-sm font-medium leading-none mt-0.5 opacity-70">
                of Nils Johansson
              </span>
            </div>
          </Link>
          
          {/* Page Title - Center (Desktop) */}
          <h1 className="text-heading hidden lg:block">
            {getPageTitle()}
          </h1>
          
          {/* Navigation - Right (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(({ title, href, icon: Icon }) => (
              <Link
                key={href}
                to={href}
                className={`nav-link flex items-center space-x-2 px-4 py-2 rounded-lg transition-all focus-ring ${
                  isActive(href) 
                    ? 'bg-muted active' 
                    : 'hover:bg-muted/50'
                }`}
                style={{
                  color: isActive(href) ? 'hsl(var(--accent))' : 'hsl(var(--foreground))'
                }}
                title={title}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{title}</span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              className="p-3 -m-3 rounded-lg hover:bg-muted transition-colors focus-ring" 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              style={{ color: 'hsl(var(--foreground))' }}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-40 md:hidden animate-reveal-fade">
          <nav className="flagship-grid py-4">
            <div className="flagship-container space-y-1">
              <div className="lg:hidden mb-4">
                <h2 className="text-heading">{getPageTitle()}</h2>
              </div>
              {navItems.map(({ title, href, icon: Icon }) => (
                <Link
                  key={href}
                  to={href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all focus-ring ${
                    isActive(href)
                      ? 'bg-muted'
                      : 'hover:bg-muted/50'
                  }`}
                  style={{
                    color: isActive(href) ? 'hsl(var(--accent))' : 'hsl(var(--foreground))'
                  }}
                  onClick={closeMenu}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-base font-medium">{title}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
