import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.png";

const Header = () => {
  const toggleMobileMenu = () => {
    const sidebar = document.querySelector('aside');
    sidebar?.classList.toggle('-translate-x-full');
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50 px-4">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            data-mobile-menu-trigger 
            className="p-2 hover:bg-accent rounded-full transition-colors md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          <Link 
            to="/"
            className="group relative flex flex-col items-start px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-sm active:scale-[0.98] select-none"
          >
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/80 rounded-lg transition-colors duration-200" />
            <span className="relative text-[13px] font-normal tracking-wide text-muted-foreground/90 group-hover:text-foreground transition-colors">
              The Office of
            </span>
            <h1 className="relative text-[20px] font-medium tracking-tight text-foreground -mt-0.5 sm:text-[22px] group-hover:text-primary transition-colors">
              Nils Johansson
            </h1>
            <div className="absolute inset-0 rounded-lg ring-1 ring-black/[0.08] group-hover:ring-black/[0.15] transition-all duration-200" />
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/" className="flex items-center">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-transparent flex items-center justify-center transition-all duration-300 hover:scale-125">
              <img 
                src={logoImage} 
                alt="The Office of Nils Johansson Logo" 
                className="h-full w-full object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
