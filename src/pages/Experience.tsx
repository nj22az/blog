
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import TimelineItem from "@/components/TimelineItem";
import { ChevronDown, ChevronUp, Download } from "lucide-react";

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
  // 2024
  {
    period: "January 2024 - Present",
    title: "Field Service Engineer",
    company: "Instron",
    category: "Industrial",
    location: "Nordic Region • Ireland • Poland",
    description: "Installation and commissioning of testing systems across Nordic Region and Europe. Perform comprehensive IQOQ processes and develop testing methods using Bluehill software. Specialize in load cell calibration and provide client training for equipment optimization.",
    skills: ["Testing Systems Installation", "IQOQ & Calibration", "Bluehill Software", "Technical Training", "Data Analysis"],
  },
  // 2023
  {
    period: "Jul 2023 - Dec 2023",
    title: "Automation Engineer",
    company: "AH Automation",
    category: "Automation",
    location: "Sweden",
    description: "Developed expertise in Siemens TIA Portal and automation systems. Implemented conveyor belt systems with touchscreen Human-Machine Interface (HMI) interfaces. Engaged in continuous professional development and maintenance of electric motors in conveyor systems.",
    skills: ["PLC Programming", "HMI Development", "System Integration", "Technical Documentation", "Automation Design"],
  },
  // 2020-2023
  {
    period: "Sep 2020 - Jul 2023",
    title: "Commissioning Engineer",
    company: "Siemens Energy",
    category: "Industrial",
    location: "Worldwide",
    description: "When I worked as a Commissioning Engineer at Siemens Energy, I specialized in on-site commissioning of gas turbines globally. I managed the assembly, installation, and testing of turbines, ensuring compliance with safety and quality standards. My technical problem-solving abilities and adaptability were pivotal in overcoming obstacles and achieving project success.",
    skills: ["Gas Turbine Systems", "Project Management", "International Operations", "Technical Leadership", "System Integration", "Safety Compliance"],
  },
  // 2019-2020
  {
    period: "Dec 2019 - Sep 2020",
    title: "Inspection Engineer",
    company: "DEKRA Industrial",
    category: "Industrial",
    location: "Sweden",
    description: "In my capacity as an Inspection Engineer at DEKRA Industrial, I was responsible for conducting comprehensive inspections of industrial equipment to ensure compliance with safety standards. Utilizing a diverse range of testing methodologies, I diligently identified potential vulnerabilities and meticulously documented my findings in comprehensive reports.",
    skills: ["Quality Control", "Safety Compliance", "Technical Documentation", "Industrial Inspections", "Equipment Assessment", "Regulatory Standards"],
  },
  // 2018-2019
  {
    period: "Sep 2018 - Dec 2019",
    title: "3rd Engineer",
    company: "Stena RoRo",
    category: "Maritime",
    location: "Worldwide",
    description: "As a Third Engineer at Stena RoRo in Nynäshamn, I oversaw engine room operations on the Stena Flavia and Mont Ventoux vessels in the Baltic Sea and Mediterranean. Collaborating effectively with cross-functional teams, I optimized engine performance, conducted routine maintenance, and adhered strictly to safety regulations.",
    skills: ["Engine Operations", "Maintenance Planning", "System Repairs", "Equipment Overhaul", "Safety Protocols", "Technical Documentation"],
  },
  {
    period: "Apr 2018 - Sep 2018",
    title: "Regional Technical Engineer",
    company: "Trafikverket",
    category: "Maritime",
    location: "Lake Vättern",
    description: "Oversaw the engine department at Trafikverket, ensuring compliance with safety protocols and adhering to project timelines. Led a team in enhancing performance and promoting continuous learning, contributing to the advancement of technical expertise.",
    skills: ["Technical Operations", "Team Leadership", "Maintenance Planning", "Safety Compliance", "System Optimization", "Equipment Repairs"],
  },
  {
    period: "Jan 2018 - Apr 2018",
    title: "Technical Manager",
    company: "Persson Innovation AB",
    category: "Industrial",
    location: "Kumla, Örebro län, Sweden",
    description: "As a Technical Manager at Persson Innovation AB, I led the successful installation and commissioning of cardboard handle application machines in Tennessee and North Carolina. I managed the shipping process of machines built in the factory in Sweden to cardboard factories in the US.",
    skills: ["Project Management", "Automation Systems", "Team Supervision", "Process Optimization", "Technical Planning", "Quality Control"],
  },
  // 2015-2018
  {
    period: "Sep 2015 - Jan 2018",
    title: "Field Service Engineer",
    company: "Instron",
    category: "Industrial",
    location: "Nordic Region • Ireland • Poland",
    description: "Installation and commissioning of testing systems across Nordic Region and Europe. Perform comprehensive IQOQ processes and develop testing methods using Bluehill software. Specialize in load cell calibration and provide client training for equipment optimization.",
    skills: ["System Installation", "Equipment Calibration", "Software Configuration", "Client Training", "Technical Support", "Quality Assurance"],
  },
  {
    period: "Apr 2015 - Sep 2015",
    title: "Engine Fitter",
    company: "Örebro Kommun",
    category: "Industrial",
    location: "Örebro, Sweden",
    description: "Conducted engine fitting, workshop repairs, and faultfinding at Örebro kommun. Managed sewage waste, performed preventive maintenance, and oversaw workshop responsibilities. Utilized skills in welding, lathe machine operation, plastering, pump overhauls, and pipe repairs.",
    skills: ["Equipment Repair", "System Maintenance", "Technical Operations", "Safety Compliance", "Documentation", "Quality Control"],
  },
  // 2014-2015
  {
    period: "Nov 2014 - Apr 2015",
    title: "3rd Engineer",
    company: "Stena Baltic A/S",
    category: "Maritime",
    location: "Worldwide",
    description: "In my role as a 3rd Engineer at Stena Baltic A/S (M/V Ask), I was responsible for engine watchkeeping, maintenance of key engine components, and ensuring safe operations onboard. I also took charge of bunkering operations, oil record logging, and electrical installations.",
    skills: ["Engine Operations", "System Maintenance", "Equipment Overhaul", "Safety Protocols", "Technical Documentation", "Quality Standards"],
  },
  {
    period: "May 2014 - Oct 2014",
    title: "3rd Engineer",
    company: "Destination Gotland",
    category: "Maritime",
    location: "Baltic Sea",
    description: "Engage in watchkeeping, perform engineer duties, bunker, overhaul diesel engines, perform watchkeeping, purifiers and clarifiers, and bilgewater separator overhauling and operations. Ensure safe engine operations.",
    skills: ["Engine Operations", "System Maintenance", "Equipment Repair", "Safety Compliance", "Technical Documentation", "Quality Control"],
  },
  {
    period: "Jan 2014 - Apr 2014",
    title: "Engineer/Motorman",
    company: "Trafikverket",
    category: "Maritime",
    location: "Lake Hjälmaren",
    description: "As an Engineer/Motorman at Trafikverket, I played a crucial role in ensuring the smooth operation of our fleet. I diligently performed engine watchkeeping duties and effectively utilized the AMOS system for maintenance activities.",
    skills: ["Engine Operations", "System Maintenance", "Equipment Repair", "Safety Standards", "Technical Documentation", "Quality Assurance"],
  },
  // 2013
  {
    period: "Nov 2013 - Dec 2013",
    title: "3rd Engineer",
    company: "Finnlines",
    category: "Maritime",
    location: "Europe",
    description: "Duties include engaging watchkeeping, performing engineer duties, bunkering, overhauling diesel engines, watchkeeping, purifiers and clarifiers, and bilgewater separator overhauling and operations.",
    skills: ["Engine Operations", "System Maintenance", "Equipment Repair", "Safety Protocols", "Technical Documentation", "Quality Standards"],
  },
  {
    period: "Aug 2013",
    title: "3rd Engineer",
    company: "Teekay",
    category: "Maritime",
    location: "North Sea",
    description: "As a third engineer on the Stena Sirita, duties included dayman duty, monitoring auxiliary engines, performing engine watch duties, loading and unloading cargo, maintaining VOC levels, and emergency generator operations.",
    skills: ["Dynamic Positioning", "Engine Operations", "System Maintenance", "Safety Compliance", "Technical Documentation", "Emergency Systems"],
  },
  {
    period: "Mar 2013 - Jul 2013",
    title: "3rd Engineer",
    company: "Noble Caledonia",
    category: "Maritime",
    location: "Worldwide",
    description: "On the Caledonian Sky, we embarked across Southeast Asia, Australia, Russian Far East, and American West Coast. Duties included engine watchkeeping, bunkering, overhauling purifiers and filters, maintaining sewage systems, and engine room operations.",
    skills: ["Engine Operations", "System Maintenance", "Equipment Repair", "Safety Standards", "Technical Documentation", "Quality Control"],
  },
  // 2012-2013
  {
    period: "Dec 2012 - Feb 2013",
    title: "3rd Engineer",
    company: "Finnlines",
    category: "Maritime",
    location: "Europe",
    description: "Performed engine watchkeeping, bunkering, and maintenance duties on RoRo vessel Finnpulp. Provided emergency cover and participated in major engine overhauls.",
    skills: ["Engine Operations", "System Maintenance", "Equipment Overhaul", "Safety Protocols", "Technical Documentation", "Quality Standards"],
  },
  {
    period: "Oct 2012 - Dec 2012",
    title: "3rd Engineer",
    company: "Sirius Ship Management",
    category: "Maritime",
    location: "Europe",
    description: "Completed a short-term contract with Sirius, serving as 3rd Engineer aboard a chemical tanker. Joined the vessel at a shipyard in Denmark for a contract.",
    skills: ["Engine Operations", "Cargo Systems", "Equipment Maintenance", "Safety Standards", "Technical Documentation", "Quality Control"],
  },
  {
    period: "Jul 2012 - Oct 2012",
    title: "3rd Engineer",
    company: "Finnlines",
    category: "Maritime",
    location: "Europe",
    description: "Following a period of fleet reflagging at Finnlines, I decided to seek new opportunities within the maritime industry to further expand my experience and skillset.",
    skills: ["Engine Operations", "System Maintenance", "Equipment Repair", "Safety Protocols", "Technical Documentation", "Quality Standards"],
  },
  {
    period: "Jul 2012",
    title: "3rd Engineer",
    company: "Terntank Rederi AS",
    category: "Maritime",
    location: "Europe",
    description: "Provided emergency cover for an ill engineer aboard the tanker Ternhav. Successfully managed all engine room operations, including machinery maintenance, repairs, and system monitoring.",
    skills: ["Engine Operations", "Cargo Systems", "Equipment Maintenance", "Safety Standards", "Technical Documentation", "Quality Control"],
  },
  {
    period: "Mar 2012 - Jul 2012",
    title: "3rd Engineer",
    company: "Finnlines",
    category: "Maritime",
    location: "Europe",
    description: "Responsible for ship's startup procedures, departures, and arrivals. Oversaw bunkering operations and trained Engineer Cadets. Vessel sailed between Malmö, Travemunde, and other Baltic Sea ports.",
    skills: ["Engine Operations", "System Maintenance", "Equipment Repair", "Safety Protocols", "Technical Documentation", "Quality Standards"],
  },
  // 2011-2012
  {
    period: "Sep 2011 - Mar 2012",
    title: "Engineer",
    company: "Royal Swedish Navy",
    category: "Military",
    location: "Swedish Coast",
    description: "My first job after university was as a military engineer. I worked in the engine room, overseeing operations, maintenance, and repairs. I also had the responsibility of steering the ship during night shifts and participating in military exercises.",
    skills: ["Military Operations", "Engine Systems", "Equipment Maintenance", "Safety Protocols", "Technical Documentation", "Emergency Response"],
  },
  // 2007-2011
  {
    period: "2007 - 2011",
    title: "Marine Engineering Programme",
    company: "Linnaeus University",
    category: "Student",
    location: "Kalmar, Sweden",
    description: "Completed Marine Engineering Programme including 10 months of seagoing service on various vessels and different trade routes. Practical training included 10 weeks of Electrical Workshop Training (commissioning a generator plant with control system PLC and alarm systems) and 10 weeks of Mechanical workshop training (including welding, engine overhaul, and other mechanical skills).",
    skills: ["Marine Engineering", "Seagoing Service", "Electrical Systems", "PLC Programming", "Mechanical Workshop", "Welding", "Engine Overhaul"],
  },
  // 2003-2007
  {
    period: "2003 - 2007",
    title: "Warehouse Worker",
    company: "Various Companies",
    category: "Logistics",
    location: "Örebro, Sweden",
    description: "I worked part-time at the Spendrups Brewery and the DHL Warehouse while also studying courses in Örebro, including English and Pedagogics.",
    skills: ["Inventory Management", "Logistics Operations", "Equipment Handling", "Safety Standards", "Documentation", "Quality Control"],
  },
  // 2003
  {
    period: "Jan 2003 - Dec 2003",
    title: "Military Service, AB",
    company: "Royal Swedish Navy",
    category: "Military",
    location: "Sweden",
    description: "Military Deckhand, with experience on the navigation school vessel HMS M20, specializing in deck work and seamanship.",
    skills: ["Military Training", "Maritime Operations", "Equipment Handling", "Safety Protocols", "Team Coordination", "Emergency Response"],
  },
  // 2002-2003
  {
    period: "2002 - 2003",
    title: "Temporary Teacher",
    company: "Various Schools",
    category: "Education",
    location: "Örebro, Sweden",
    description: "As a high school teacher, I worked part-time as an English, social science, math, and science teacher.",
    skills: ["Teaching", "Curriculum Development", "Student Assessment", "Classroom Management", "Communication", "Education Planning"],
  },
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

  const downloadCSV = () => {
    const headers = ["Period", "Title", "Company", "Category", "Location", "Description", "Skills"];
    const csvContent = [
      headers.join(","),
      ...experiences.map(exp => [
        exp.period,
        `"${exp.title}"`,
        `"${exp.company}"`,
        exp.category,
        `"${exp.location}"`,
        `"${exp.description}"`,
        `"${exp.skills.join(", ")}"`
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "professional_experience.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-brand-dark">
          Professional Experience
        </h2>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={downloadCSV}
            className="text-brand-purple hover:text-brand-purple/90 hover:bg-brand-purple/10"
          >
            <Download className="h-4 w-4 mr-1" />
            Download CSV
          </Button>
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
