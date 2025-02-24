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
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${
            location.pathname === item.path
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          }`}
        >
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <item.icon className="h-5 w-5" />
          </div>
          <span className="font-medium">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
