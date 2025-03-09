import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import SidebarNav from "./SidebarNav";
import { APP_VERSION, APP_YEAR, APP_AUTHOR } from "@/lib/constants";
import { Code2 } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      const sidebar = document.querySelector('aside');
      sidebar?.classList.add('-translate-x-full');
    }
  };

  return (
    <aside ref={animationContainerRef} className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-border bg-background/80 backdrop-blur-md -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-40">
      <SidebarNav onLinkClick={handleLinkClick} />
      <div className="absolute bottom-0 left-0 right-0 border-t border-border">
        <Link 
          to="/version-history" 
          className="p-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          onClick={handleLinkClick}
        >
          <Code2 className="h-3.5 w-3.5" />
          <span>Version {APP_VERSION}</span>
        </Link>
        <div className="p-3 pt-0 text-center text-xs text-muted-foreground">
          © {APP_YEAR} {APP_AUTHOR}. All rights reserved.
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
