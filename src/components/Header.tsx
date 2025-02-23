
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const toggleMobileMenu = () => {
    const sidebar = document.querySelector('aside');
    sidebar?.classList.toggle('-translate-x-full');
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 px-4">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            data-mobile-menu-trigger 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-5 w-5 text-neutral-gray" />
          </button>
          <h1 className="text-lg font-semibold truncate text-red-600 sm:text-xl">
            The Office of Nils Johansson
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a2238] flex items-center justify-center hover:opacity-90 transition-opacity overflow-hidden">
                <img 
                  src="/lovable-uploads/c8f8ae3a-cc1f-424c-9f22-03622b6f9c72.png"
                  alt="Profile Logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Menu className="mr-2 h-4 w-4" />
                <span>Menu</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
