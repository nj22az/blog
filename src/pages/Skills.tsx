
import React from "react";
import { LucideProps } from "lucide-react";
import { Code, Cpu, Cog, Server, Scale, Ruler, Gauge } from "lucide-react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      title: "Certified Calibration Expertise",
      icon: Scale,
      skills: [
        "ISO/IEC 17025:2017 Certified",
        "Force (ISO 7500-1)",
        "Strain (ISO 9513)",
        "Speed & Displacement",
        "ASTM E2658 & E2309",
        "ISO 5893"
      ],
      level: t("expert")
    },
    {
      title: "Industrial Automation",
      icon: Cpu,
      skills: ["PLC Programming", "HMI Development", "SCADA Systems", "Industrial Networks"],
      level: t("advanced")
    },
    {
      title: "Engineering",
      icon: Cog,
      skills: ["Mechanical Systems", "Electrical Systems", "System Integration", "Equipment Maintenance"],
      level: t("expert")
    },
    {
      title: "Maritime Engineering",
      icon: Server,
      skills: ["Engine Operations", "System Maintenance", "Safety Protocols", "Equipment Repair"],
      level: t("expert")
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-brand-dark mb-6">{t('skills_expertise')}</h2>
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
                      <p className="text-sm text-neutral-gray mt-1">{t('level')}: {category.level}</p>
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
