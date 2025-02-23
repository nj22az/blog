
import { Bell, MessageSquare, Search, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes or window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen(false);
        const sidebar = document.querySelector('aside');
        sidebar?.classList.add('-translate-x-full');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    const sidebar = document.querySelector('aside');
    sidebar?.classList.toggle('-translate-x-full');

    // If opening the menu, add click outside listener
    if (!isMobileMenuOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 0);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const sidebar = document.querySelector('aside');
    const menuButton = document.querySelector('[data-mobile-menu-trigger]');

    if (sidebar && !sidebar.contains(event.target as Node) && 
        menuButton && !menuButton.contains(event.target as Node)) {
      setIsMobileMenuOpen(false);
      sidebar.classList.add('-translate-x-full');
      document.removeEventListener('click', handleClickOutside);
    }
  };

  // Cleanup event listener on component unmount
  useEffect(() => {
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 px-4">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            data-mobile-menu-trigger
            className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden"
            onClick={(e) => {
              e.stopPropagation();
              toggleMobileMenu();
            }}
          >
            <Menu className="h-5 w-5 text-neutral-gray" />
          </button>
          <h1 className="text-lg sm:text-xl font-semibold text-brand-purple truncate">
            The Office of Nils Johansson
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <Bell className="h-5 w-5 text-neutral-gray" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <MessageSquare className="h-5 w-5 text-neutral-gray" />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-purple/20 flex items-center justify-center hover:bg-brand-purple/30 transition-colors">
                <span className="text-brand-purple font-medium text-sm sm:text-base">NJ</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
                <DialogTrigger asChild>
                  <DropdownMenuItem>
                    <Search className="mr-2 h-4 w-4" />
                    <span>Search</span>
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent>
                  <div className="space-y-4 py-2">
                    <h2 className="text-lg font-semibold">Search</h2>
                    <div className="relative">
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="pl-10"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
