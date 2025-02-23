
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { X } from 'lucide-react';

interface JobAnimationProps {
  containerId: string;
  category: string;
  onClose: () => void;
}

const JobAnimation = ({ containerId, category, onClose }: JobAnimationProps) => {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(56, 56);
    renderer.setClearColor(0x000000, 0);
    
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '0';
    renderer.domElement.style.borderRadius = '9999px';
    renderer.domElement.style.pointerEvents = 'none';
    
    container.insertBefore(renderer.domElement, container.firstChild);

    camera.position.z = 2;
    camera.position.y = 0;
    camera.lookAt(0, 0, 0);

    const geometry = new THREE.PlaneGeometry(4, 4, 20, 20);
    const material = new THREE.MeshBasicMaterial({
      color: category.toLowerCase() === 'maritime' ? 0x9b87f5 : 0x87f5b4,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 4;
    mesh.position.y = 0;
    mesh.position.z = -1;
    scene.add(mesh);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const positions = geometry.attributes.position;
      const time = Date.now() * 0.0005;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        let z = 0;

        switch (category.toLowerCase()) {
          case 'maritime':
            z = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time) * 0.5 +
                Math.sin(x * 2 + time * 2) * 0.2;
            break;
          case 'industrial':
            z = Math.sin(x * 2 + time) * 0.3 +
                Math.cos(y * 2 + time) * 0.3;
            mesh.rotation.z = time * 0.5;
            break;
          case 'military':
            z = Math.abs(Math.sin(x * 3 + time) * Math.cos(y * 3 + time)) * 0.4;
            break;
          case 'automation':
            z = Math.round(Math.sin(x * 4 + time) * 4) / 4 * 0.5;
            break;
          case 'education':
            z = Math.sin(x * 0.3 + time) * 0.3 +
                Math.cos((x + y) * 0.5 + time) * 0.2;
            break;
          default:
            z = Math.sin(x + time) * 0.3;
        }
        
        positions.setZ(i, z);
      }
      
      positions.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();
    rendererRef.current = renderer;

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [containerId, category]);

  return (
    <button 
      onClick={onClose}
      className="absolute top-1 right-1 z-20 rounded-full bg-white/80 p-1 hover:bg-white transition-colors"
      aria-label="Stop animation"
    >
      <X className="h-3 w-3 text-gray-500" />
    </button>
  );
};

export default JobAnimation;
