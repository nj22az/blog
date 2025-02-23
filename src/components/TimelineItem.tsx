
import React from 'react';
import * as Icons from "lucide-react";
import JobAnimation from './JobAnimation';

interface TimelineItemProps {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  exp: {
    period: string;
    title: string;
    company: string;
    category: string;
    location: string;
    description: string;
    skills: string[];
  };
  showAnimation: boolean;
  onToggleAnimation: () => void;
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
    case 'logistics':
      return Icons.Package;
    case 'student':
      return Icons.GraduationCap;
    default:
      return Icons.Briefcase;
  }
};

const TimelineItem = ({ 
  index, 
  isFirst, 
  isLast, 
  exp, 
  showAnimation,
  onToggleAnimation 
}: TimelineItemProps) => {
  const containerId = `exp-${index}`;

  return (
    <div className="relative flex gap-3 sm:gap-6 animate-fade-in">
      {/* Timeline connector line */}
      <div className="absolute left-[19px] sm:left-[27px] top-0 h-full w-px bg-gray-200" />
      
      <div className="relative shrink-0">
        <div 
          id={containerId}
          className="relative w-10 h-10 sm:w-14 sm:h-14"
        >
          <div className="absolute inset-[-4px] bg-white rounded-full" /> {/* White background circle */}
          <button 
            onClick={onToggleAnimation}
            className="absolute inset-0 rounded-full bg-brand-purple/10 flex items-center justify-center z-10 hover:bg-brand-purple/20 transition-colors"
          >
            {React.createElement(getIcon(exp.category), {
              className: "h-5 w-5 sm:h-6 sm:w-6 text-brand-purple"
            })}
          </button>
          {showAnimation && (
            <JobAnimation 
              containerId={containerId}
              category={exp.category}
            />
          )}
        </div>
      </div>
      
      <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
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
  );
};

export default TimelineItem;
