
import { Home, Briefcase, Star, Download, ShoppingCart, Book, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Sidebar = () => {
  const location = useLocation();
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
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
      icon: Book,
      label: "Blog",
      path: "/blog"
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings"
    }
  ];

  const initThreeJS = () => {
    if (!animationContainerRef.current) return;
    
    // Clean up existing renderer
    if (rendererRef.current) {
      animationContainerRef.current.removeChild(rendererRef.current.domElement);
      rendererRef.current = null;
    }

    const container = animationContainerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '0';
    renderer.domElement.style.opacity = '0.1';
    renderer.domElement.style.pointerEvents = 'none';
    
    container.insertBefore(renderer.domElement, container.firstChild);

    camera.position.z = 2;
    camera.lookAt(0, 0, 0);

    const geometry = new THREE.PlaneGeometry(4, 8, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0x9b87f5,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    
    const waves = new THREE.Mesh(geometry, material);
    waves.rotation.x = -Math.PI / 6;
    scene.add(waves);

    const animate = () => {
      if (!rendererRef.current) return;
      requestAnimationFrame(animate);
      
      const positions = geometry.attributes.position;
      const time = Date.now() * 0.0002;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = Math.sin(x + time) * Math.cos(y + time) * 0.3;
        positions.setZ(i, z);
      }
      
      positions.needsUpdate = true;
      renderer.render(scene, camera);
    };

    rendererRef.current = renderer;
    animate();
  };

  useEffect(() => {
    if (location.pathname === '/experience') {
      initThreeJS();
    } else {
      // Clean up animation when not on experience page
      if (rendererRef.current && animationContainerRef.current) {
        animationContainerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current = null;
      }
    }

    // Cleanup on unmount
    return () => {
      if (rendererRef.current && animationContainerRef.current) {
        animationContainerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current = null;
      }
    };
  }, [location.pathname]);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      // Close sidebar on mobile when link is clicked
      const sidebar = document.querySelector('aside');
      sidebar?.classList.add('-translate-x-full');
    }
  };

  return (
    <aside ref={animationContainerRef} className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-white/80 backdrop-blur-md -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-40">
      <nav className="p-4 space-y-2 relative z-10">
        {navItems.map(item => (
          <Link
            key={item.label}
            to={item.path}
            onClick={handleLinkClick}
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
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-sm text-neutral-gray border-t border-gray-200">
        © 2025 Nils Johansson. All rights reserved.
      </div>
    </aside>
  );
};

export default Sidebar;
