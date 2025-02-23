
import { Home, Briefcase, Star, Users, Book, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Overview", path: "/" },
  { icon: Briefcase, label: "Experience", path: "/experience" },
  { icon: Star, label: "Skills", path: "/skills" },
  { icon: Users, label: "Recommendations", path: "/recommendations" },
  { icon: Book, label: "Blog", path: "/blog" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-neutral-gray hover:text-brand-purple"
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
