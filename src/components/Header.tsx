import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

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
            to="/about"
            className="group flex flex-col items-start px-2 py-1 rounded-lg transition-colors hover:bg-accent"
          >
            <span className="text-sm font-light tracking-wider text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
              The Office of
            </span>
            <h1 className="text-xl font-medium tracking-tight text-foreground -mt-1 sm:text-2xl group-hover:text-primary transition-colors">
              Nils Johansson
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Profile button removed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
