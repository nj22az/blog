import { Link, useLocation } from "react-router-dom";
import { Home, Download, ShoppingCart, Settings } from "lucide-react";

const navItems = [
  {
    icon: Home,
    label: "Overview",
    path: "/"
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
    <nav className="p-4 space-y-1 relative z-10">
      {navItems.map(item => (
        <Link
          key={item.label}
          to={item.path}
          onClick={onLinkClick}
          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
            location.pathname === item.path
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
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
