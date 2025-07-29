import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      
      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        // Ignore small scroll movements to prevent jitter
        ticking = false;
        return;
      }

      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { scrollDir, scrollY };
}