
import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { BriefcaseIcon, CalendarIcon, Building, Anchor, Shield, GraduationCap } from "lucide-react";

const getIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'maritime':
      return Anchor;
    case 'military':
      return Shield;
    case 'education':
      return GraduationCap;
    default:
      return BriefcaseIcon;
  }
};

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
    description: "Installation and commissioning of testing systems across Nordic Region and Europe. Perform comprehensive IQOQ processes and develop testing methods using Bluehill software.",
    skills: ["Testing Systems Installation", "IQOQ & Calibration", "Bluehill Software", "Technical Training", "Data Analysis"],
  },
  {
    period: "Jul 2023 - Dec 2023",
    title: "Automation Engineer",
    company: "AH Automation",
    category: "Automation",
    location: "Sweden",
    description: "Developed expertise in Siemens TIA Portal and automation systems. Implemented conveyor belt systems with touchscreen Human-Machine Interface (HMI) interfaces.",
    skills: ["PLC Programming", "HMI Development", "System Integration", "Technical Documentation", "Automation Design"],
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <main className="pt-24 pb-8 px-4 md:ml-64">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-brand-dark mb-6 sm:mb-8">Professional Experience</h2>
            
            <div className="relative space-y-6 sm:space-y-8">
              {/* Timeline line */}
              <div className="absolute left-[19px] sm:left-[27px] top-3 bottom-3 w-px bg-gray-200" />
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-3 sm:gap-6 animate-fade-in">
                  {/* Timeline dot */}
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-brand-purple/10 flex items-center justify-center z-10 relative">
                      {React.createElement(getIcon(exp.category), {
                        className: "h-5 w-5 sm:h-6 sm:w-6 text-brand-purple"
                      })}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-brand-dark">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-gray mt-1">
                          <Building className="h-4 w-4 shrink-0" />
                          <span>{exp.company}</span>
                          <span className="hidden sm:inline text-gray-300">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-neutral-gray">
                        <CalendarIcon className="h-4 w-4 mr-2 shrink-0" />
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
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;
