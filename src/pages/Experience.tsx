
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import TimelineItem from "@/components/TimelineItem";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Experience {
  period: string;
  title: string;
  company: string;
  category: string;
  location: string;
  description: string;
  skills: string[];
}

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
    description: "When I worked as a Commissioning Engineer at Siemens Energy, I specialized in on-site commissioning of gas turbines globally. I managed the assembly, installation, and testing of turbines, ensuring compliance with safety and quality standards. My technical problem-solving abilities and adaptability were pivotal in overcoming obstacles and achieving project success.",
    skills: ["Gas Turbine Systems", "Project Management", "International Operations", "Technical Leadership", "System Integration", "Safety Compliance"],
  },
  {
    period: "Dec 2019 - Sep 2020",
    title: "Inspection Engineer",
    company: "DEKRA Industrial",
    category: "Industrial",
    location: "Sweden",
    description: "In my capacity as an Inspection Engineer at DEKRA Industrial, I was responsible for conducting comprehensive inspections of industrial equipment to ensure compliance with safety standards. Utilizing a diverse range of testing methodologies, I diligently identified potential vulnerabilities and meticulously documented my findings in comprehensive reports.",
    skills: ["Quality Control", "Safety Compliance", "Technical Documentation", "Industrial Inspections", "Equipment Assessment"],
  },
  {
    period: "Sep 2018 - Dec 2019",
    title: "3rd Engineer",
    company: "Stena RoRo",
    category: "Maritime",
    location: "Worldwide",
    description: "As a Third Engineer at Stena RoRo in Nynäshamn, I oversaw engine room operations on the Stena Flavia and Mont Ventoux vessels in the Baltic Sea and Mediterranean. Managed servicing and maintenance of auxiliary engine CAT3512 and Sperre Compressor systems.",
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
    period: "Sep 2015 - Jan 2018",
    title: "Field Service Engineer",
    company: "Instron",
    category: "Industrial",
    location: "Nordic Region • Ireland • Poland",
    description: "Installation and commissioning of testing systems across Nordic Region and Europe. Performed comprehensive IQOQ processes and developed testing methods.",
    skills: ["System Installation", "Equipment Calibration", "Software Configuration", "Client Training", "Technical Support"],
  },
  {
    period: "Apr 2015 - Sep 2015",
    title: "Engine Fitter",
    company: "Örebro Kommun",
    category: "Industrial",
    location: "Örebro, Sweden",
    description: "Conducted engine fitting, workshop repairs, and faultfinding at Örebro kommun. Managed sewage waste, performed preventive maintenance, and oversaw workshop responsibilities.",
    skills: ["Equipment Repair", "System Maintenance", "Technical Operations", "Safety Compliance", "Documentation"],
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
    period: "Jan 2014 - Apr 2014",
    title: "Engineer/Motorman",
    company: "Trafikverket",
    category: "Maritime",
    location: "Lake Hjälmaren",
    description: "Played a crucial role in ensuring smooth fleet operation. Performed engine watchkeeping duties and utilized AMOS system for maintenance management.",
    skills: ["Engine Operations", "System Maintenance", "Equipment Repair", "Safety Standards", "Technical Documentation"],
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
  const [activeAnimation, setActiveAnimation] = useState<number | null>(null);

  const showMore = () => {
    setVisibleExperiences(experiences.length);
  };

  const showLess = () => {
    setVisibleExperiences(3);
    setActiveAnimation(null);
  };

  const toggleAnimation = (index: number) => {
    setActiveAnimation(currentActive => currentActive === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-brand-dark">
          Professional Experience
        </h2>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={visibleExperiences < experiences.length ? showMore : showLess}
          className="text-brand-purple hover:text-brand-purple/90 hover:bg-brand-purple/10"
        >
          {visibleExperiences < experiences.length ? (
            <>
              Show All
              <ChevronDown className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Show Less
              <ChevronUp className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      
      <div className="relative space-y-6 sm:space-y-8">
        {experiences.slice(0, visibleExperiences).map((exp, index) => (
          <TimelineItem
            key={index}
            index={index}
            isFirst={index === 0}
            isLast={index === visibleExperiences - 1}
            exp={exp}
            showAnimation={activeAnimation === index}
            onToggleAnimation={() => toggleAnimation(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
