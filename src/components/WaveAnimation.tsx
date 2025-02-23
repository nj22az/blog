
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface WaveAnimationProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const WaveAnimation = ({ containerRef }: WaveAnimationProps) => {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const wavesRef = useRef<THREE.Mesh | null>(null);

  const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
    if (!wavesRef.current || !event.beta || !event.gamma) return;
    
    const beta = (event.beta * Math.PI) / 180;
    const gamma = (event.gamma * Math.PI) / 180;
    
    wavesRef.current.rotation.x = -Math.PI / 6 + (beta * 0.1);
    wavesRef.current.rotation.y = gamma * 0.1;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const initThreeJS = () => {
      const container = containerRef.current;
      if (!container) return;
      
      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current = null;
      }

      const scene = new THREE.Scene();
      sceneRef.current = scene;
      
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
      renderer.domElement.style.opacity = '0.3';
      renderer.domElement.style.pointerEvents = 'none';
      
      container.insertBefore(renderer.domElement, container.firstChild);

      camera.position.z = 2;
      camera.lookAt(0, 0, 0);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const geometry = new THREE.PlaneGeometry(4, 8, 50, 50);
      const material = new THREE.MeshPhongMaterial({
        color: 0x9b87f5,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
        shininess: 90,
        specular: 0x9b87f5
      });
      
      const waves = new THREE.Mesh(geometry, material);
      waves.rotation.x = -Math.PI / 6;
      scene.add(waves);
      wavesRef.current = waves;

      const animate = () => {
        if (!rendererRef.current) return;
        requestAnimationFrame(animate);
        
        const positions = geometry.attributes.position;
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const y = positions.getY(i);
          
          const z = 
            Math.sin(x * 0.5 + time) * 0.5 +
            Math.sin(x * 2 + time * 2) * 0.2 +
            Math.cos(y * 0.5 + time) * 0.5 +
            Math.sin((x + y) * 0.5 + time) * 0.3;
          
          positions.setZ(i, z);
        }
        
        if (wavesRef.current) {
          wavesRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
        }
        
        positions.needsUpdate = true;
        renderer.render(scene, camera);
      };

      rendererRef.current = renderer;
      animate();
    };

    initThreeJS();

    if (typeof DeviceOrientationEvent !== 'undefined' && 
        typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      (DeviceOrientationEvent as any).requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', handleDeviceOrientation);
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }

    return () => {
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current = null;
      }
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [containerRef]);

  return null;
};

export default WaveAnimation;
