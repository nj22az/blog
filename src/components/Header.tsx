
import { Search, Bell, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 px-4">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-brand-purple">
            The Office of Nils Johansson
          </h1>
          <div className="relative w-64">
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 bg-gray-100"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="h-5 w-5 text-neutral-gray" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MessageSquare className="h-5 w-5 text-neutral-gray" />
          </button>
          <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center">
            <span className="text-brand-purple font-medium">NJ</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
