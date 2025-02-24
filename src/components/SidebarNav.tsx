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
    <nav className="p-4 space-y-3 relative z-10">
      {navItems.map(item => (
        <Link
          key={item.label}
          to={item.path}
          onClick={onLinkClick}
          className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-accent transition-colors group"
        >
          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <item.icon className="h-6 w-6 text-primary" />
          </div>
          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
