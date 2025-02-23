import React, { useState, useCallback, useRef, useEffect } from "react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

interface Experience {
  period: string;
  title: string;
  company: string;
  category: string;
  location: string;
  description: string;
  skills: string[];
}

const getIcon = (category: string): React.FC<Icons.LucideProps> => {
  switch (category.toLowerCase()) {
    case 'maritime':
      return Icons.Anchor;
    case 'military':
      return Icons.Shield;
    case 'education':
      return Icons.GraduationCap;
    case 'industrial':
      return Icons.Factory;
    case 'automation':
      return Icons.Cpu;
    default:
      return Icons.Briefcase;
  }
};

const experiences: Experience[] = [
  {
    period: "January 2024 - Present",
    title: "Field Service Engineer",
    company: "Instron",
    category: "Industrial",
    location: "Nordic Region • Ireland • Poland",
    description: "Installation and commissioning of testing systems across Nordic Region and Europe. Perform comprehensive IQOQ processes and develop testing methods using Bluehill software. Specialize in load cell calibration and provide client training for equipment optimization.",
    skills: ["Testing Systems Installation", "IQOQ & Calibration", "Bluehill Software", "Technical Training", "Data Analysis"],
  },
  {
    period: "Jul 2023 - Dec 2023",
    title: "Automation Engineer",
    company: "AH Automation",
    category: "Automation",
    location: "Sweden",
    description: "Developed expertise in Siemens TIA Portal and automation systems. Implemented conveyor belt systems with touchscreen Human-Machine Interface (HMI) interfaces. Engaged in continuous professional development and maintenance of electric motors in conveyor systems.",
    skills: ["PLC Programming", "HMI Development", "System Integration", "Technical Documentation", "Automation Design"],
  },
  {
    period: "Sep 2020 - Jul 2023",
    title: "Commissioning Engineer",
    company: "Siemens Energy",
    category: "Industrial",
    location: "Worldwide",
    description: "Specialized in on-site commissioning of gas turbines globally. Managed the assembly, installation, and testing of turbines, ensuring compliance with safety and quality standards.",
    skills: ["Gas Turbine Systems", "Project Management", "International Operations", "Technical Leadership", "System Integration", "Safety Compliance"],
  },
  {
    period: "Dec 2019 - Sep 2020",
    title: "Inspection Engineer",
    company: "DEKRA Industrial",
    category: "Industrial",
    location: "Sweden",
    description: "Responsible for conducting comprehensive inspections of industrial equipment to ensure compliance with safety standards. Provided actionable recommendations for repairs and maintenance.",
    skills: ["Quality Control", "Safety Compliance", "Technical Documentation", "Industrial Inspections", "Equipment Assessment"],
  },
  {
    period: "Sep 2018 - Dec 2019",
    title: "3rd Engineer",
    company: "Stena RoRo",
    category: "Maritime",
    location: "Worldwide",
    description: "Oversaw engine room operations on the Stena Flavia and Mont Ventoux vessels. Managed servicing and maintenance of auxiliary engine CAT3512 and Sperre Compressor systems.",
    skills: ["Engine Operations", "Maintenance Planning", "System Repairs", "Equipment Overhaul", "Safety Protocols"],
  },
  {
    period: "Apr 2018 - Sep 2018",
    title: "Regional Technical Engineer",
    company: "Trafikverket",
    category: "Maritime",
    location: "Lake Vättern",
    description: "Oversaw the engine department, ensuring compliance with safety protocols and project timelines. Led team in enhancing performance and continuous learning.",
    skills: ["Technical Operations", "Team Leadership", "Maintenance Planning", "Safety Compliance", "System Optimization"],
  },
  {
    period: "Jan 2018 - Apr 2018",
    title: "Technical Manager",
    company: "Persson Innovation AB",
    category: "Industrial",
    location: "Kumla, Örebro län, Sweden",
    description: "Led installation and commissioning of cardboard handle application machines in Tennessee and North Carolina. Managed shipping process from Sweden to US.",
    skills: ["Project Management", "Automation Systems", "Team Supervision", "Process Optimization", "Technical Planning"],
  },
  {
    period: "Sep 2015 - Jan 218",
    title: "Field Service Engineer",
    company: "Instron",
    category: "Industrial",
    location: "Nordic Region • Ireland • Poland",
    description: "Installation and commissioning of testing systems across Nordic Region and Europe. Performed comprehensive IQOQ processes and developed testing methods.",
    skills: ["System Installation", "Equipment Calibration", "Software Configuration", "Client Training", "Technical Support"],
  },
  {
    period: "Nov 2014 - Apr 2015",
    title: "3rd Engineer",
    company: "Stena Baltic A/S",
    category: "Maritime",
    location: "Worldwide",
    description: "Responsible for engine watchkeeping, maintenance of key engine components, and ensuring safe operations onboard. Managed bunkering operations and oil record logging.",
    skills: ["Engine Operations", "System Maintenance", "Equipment Overhaul", "Safety Protocols", "Technical Documentation"],
  },
  {
    period: "May 2014 - Oct 2014",
    title: "3rd Engineer",
    company: "Destination Gotland",
    category: "Maritime",
    location: "Baltic Sea",
    description: "Engaged in watchkeeping, performed engineer duties, managed bunkering, overhauled diesel engines, and operated purifiers and clarifiers.",
    skills: ["Engine Operations", "System Maintenance", "Equipment Repair", "Safety Compliance", "Technical Documentation"],
  },
  {
    period: "Sep 2011 - Mar 2012",
    title: "Engineer",
    company: "Royal Swedish Navy",
    category: "Military",
    location: "Swedish Coast",
    description: "Worked as a military engineer in the engine room, overseeing operations, maintenance, and repairs. Participated in military exercises.",
    skills: ["Military Operations", "Engine Systems", "Equipment Maintenance", "Safety Protocols", "Emergency Response"],
  },
  {
    period: "Jan 2003 - Dec 2003",
    title: "Military Service, AB",
    company: "Royal Swedish Navy",
    category: "Military",
    location: "Sweden",
    description: "Military Deckhand on the navigation school vessel HMS M20, specializing in deck work and seamanship.",
    skills: ["Military Training", "Maritime Operations", "Equipment Handling", "Safety Protocols", "Team Coordination"],
  }
];

const Experience = () => {
  const [visibleExperiences, setVisibleExperiences] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const animationRefs = useRef<{ [key: string]: THREE.WebGLRenderer | null }>({});

  const showMore = () => {
    setVisibleExperiences(prev => Math.min(prev + 2, experiences.length));
  };

  const showLess = () => {
    setVisibleExperiences(3);
    setSelectedCategory(null);
  };

  const initThreeJS = useCallback((containerId: string, category: string) => {
    console.log('Initializing Three.js for container:', containerId, 'category:', category);
    const container = cardRefs.current[containerId];
    if (!container) {
      console.log('Container not found:', containerId);
      return;
    }

    if (animationRefs.current[containerId]) {
      console.log('Cleaning up previous animation');
      container.removeChild(animationRefs.current[containerId]!.domElement);
      animationRefs.current[containerId] = null;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '1';
    renderer.domElement.style.borderRadius = '0.75rem';
    renderer.domElement.style.pointerEvents = 'none';
    
    container.insertBefore(renderer.domElement, container.firstChild);
    console.log('Renderer added to container');
    
    camera.position.z = 3;
    camera.position.y = 0;

    const geometry = new THREE.PlaneGeometry(15, 8, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: category.toLowerCase() === 'maritime' ? 0x9b87f5 : 0x87f5b4,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    
    const waves = new THREE.Mesh(geometry, material);
    waves.rotation.x = -Math.PI / 6;
    waves.position.y = 0;
    waves.position.z = -2;
    scene.add(waves);

    const animate = () => {
      if (!animationRefs.current[containerId]) return;
      
      requestAnimationFrame(animate);
      
      const positions = geometry.attributes.position;
      const time = Date.now() * 0.0003;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        let z = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time);
        
        if (category.toLowerCase() === 'maritime') {
          z *= 2.0;
        } else if (category.toLowerCase() === 'industrial') {
          z = Math.sin(x * 2 + time) * 0.6;
        } else if (category.toLowerCase() === 'military') {
          z = Math.sin(x * 1.5 + time) * Math.cos(y * 1.5 + time);
        }
        
        positions.setZ(i, z);
      }
      
      positions.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();
    animationRefs.current[containerId] = renderer;
    console.log('Animation started for:', containerId);

    return () => {
      if (container && animationRefs.current[containerId]) {
        container.removeChild(animationRefs.current[containerId]!.domElement);
        animationRefs.current[containerId] = null;
        console.log('Animation cleaned up for:', containerId);
      }
    };
  }, []);

  const handleCategoryClick = (containerId: string, category: string) => {
    console.log('Category clicked:', category, 'for container:', containerId);
    if (selectedCategory === containerId) {
      setSelectedCategory(null);
      if (animationRefs.current[containerId]) {
        const container = cardRefs.current[containerId];
        if (container) {
          container.removeChild(animationRefs.current[containerId]!.domElement);
          animationRefs.current[containerId] = null;
        }
      }
    } else {
      setSelectedCategory(containerId);
      initThreeJS(containerId, category);
    }
  };

  useEffect(() => {
    return () => {
      Object.keys(animationRefs.current).forEach(key => {
        const container = cardRefs.current[key];
        const renderer = animationRefs.current[key];
        if (container && renderer) {
          container.removeChild(renderer.domElement);
        }
      });
      animationRefs.current = {};
    };
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl sm:text-2xl font-semibold text-brand-dark mb-6 sm:mb-8">Professional Experience</h2>
      
      <div className="relative space-y-6 sm:space-y-8">
        {experiences.slice(0, visibleExperiences).map((exp, index) => (
          <div key={index} className="relative flex gap-3 sm:gap-6 animate-fade-in">
            {index !== 0 && (
              <div className="absolute left-[19px] sm:left-[27px] top-0 h-3 w-px bg-gray-200" />
            )}
            {index !== visibleExperiences - 1 && (
              <div className="absolute left-[19px] sm:left-[27px] top-[52px] bottom-0 w-px bg-gray-200" />
            )}
            
            <div className="relative shrink-0">
              <button 
                onClick={() => handleCategoryClick(`exp-${index}`, exp.category)}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-brand-purple/10 flex items-center justify-center z-10 relative hover:bg-brand-purple/20 transition-colors"
              >
                {React.createElement(getIcon(exp.category), {
                  className: "h-5 w-5 sm:h-6 sm:w-6 text-brand-purple"
                })}
              </button>
            </div>
            
            <div 
              ref={el => cardRefs.current[`exp-${index}`] = el}
              className="relative flex-1 bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-brand-dark">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-gray mt-1">
                      <Icons.Building className="h-4 w-4 shrink-0" />
                      <span>{exp.company}</span>
                      <span className="hidden sm:inline text-gray-300">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-neutral-gray">
                    <Icons.Calendar className="h-4 w-4 mr-2 shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-neutral-gray mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 sm:px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs sm:text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        {visibleExperiences < experiences.length ? (
          <Button 
            variant="outline" 
            onClick={showMore}
            className="mx-auto"
          >
            Show More
          </Button>
        ) : (
          <Button 
            variant="outline" 
            onClick={showLess}
            className="mx-auto"
          >
            Show Less
          </Button>
        )}
      </div>
    </div>
  );
};

export default Experience;
