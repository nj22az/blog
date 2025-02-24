import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Star, Download, ShoppingCart, Settings } from "lucide-react";

const navItems = [
  {
    icon: Home,
    label: "Overview",
    path: "/"
  },
  {
    icon: Briefcase,
    label: "Experience",
    path: "/experience"
  },
  {
    icon: Star,
    label: "Skills",
    path: "/skills"
  },
  {
    icon: Download,
    label: "Downloads",
    path: "/downloads"
  },
  {
    icon: ShoppingCart,
    label: "Store",
    path: "/store"
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/settings"
  }
];

interface SidebarNavProps {
  onLinkClick: () => void;
}

const SidebarNav = ({ onLinkClick }: SidebarNavProps) => {
  const location = useLocation();

  return (
    <nav className="p-4 space-y-2 relative z-10">
      {navItems.map(item => (
        <Link
          key={item.label}
          to={item.path}
          onClick={onLinkClick}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-neutral-gray hover:text-brand-purple ${
            location.pathname === item.path
              ? "bg-brand-purple/10 text-brand-purple"
              : "hover:bg-gray-100"
          }`}
        >
          <item.icon className="h-5 w-5" />
          <span className="font-medium">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
