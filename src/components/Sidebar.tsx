
import { Home, Briefcase, Star, Download, ShoppingCart, Book, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Overview", path: "/" },
  { icon: Briefcase, label: "Experience", path: "/experience" },
  { icon: Star, label: "Skills", path: "/skills" },
  { icon: Download, label: "Downloads", path: "/downloads" },
  { icon: ShoppingCart, label: "Store", path: "/store" },
  { icon: Book, label: "Blog", path: "/blog" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  const handleLinkClick = () => {
    if (window.innerWidth < 768) { // Close sidebar on mobile when link is clicked
      const sidebar = document.querySelector('aside');
      sidebar?.classList.add('-translate-x-full');
    }
  };

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-white/80 backdrop-blur-md -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-40">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-neutral-gray hover:text-brand-purple"
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-sm text-neutral-gray border-t border-gray-200">
        Copyright of Nils Johansson 2025 all rights reserved.
      </div>
    </aside>
  );
};

export default Sidebar;
