
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

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
          <h1 className="text-lg font-semibold truncate text-primary sm:text-xl">
            The Office of Nils Johansson
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-150 overflow-hidden"
          >
            <img 
              src="/lovable-uploads/761a5103-4e51-4e54-9cc5-8777776f6ee8.png"
              alt="Profile Logo"
              className="w-full h-full object-contain"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
