import React from "react";
import { LucideProps } from "lucide-react";
import { Code, Cpu, Cog, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Development",
    icon: Code,
    skills: ["React", "TypeScript", "Node.js", "Python", "C#", "Java"],
    level: "Expert"
  },
  {
    title: "Industrial Automation",
    icon: Cpu,
    skills: ["PLC Programming", "HMI Development", "SCADA Systems", "Industrial Networks"],
    level: "Advanced"
  },
  {
    title: "Engineering",
    icon: Cog,
    skills: ["Mechanical Systems", "Electrical Systems", "CAD Design", "System Integration"],
    level: "Expert"
  },
  {
    title: "Maritime Engineering",
    icon: Server,
    skills: ["Engine Operations", "System Maintenance", "Safety Protocols", "Equipment Repair"],
    level: "Expert"
  }
];

const Skills = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-brand-dark mb-6">Skills & Expertise</h2>
      <div className="grid gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-brand-purple/10">
                  <IconComponent className="h-6 w-6 text-brand-purple" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-brand-dark">{category.title}</h3>
                      <p className="text-sm text-neutral-gray mt-1">Level: {category.level}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
