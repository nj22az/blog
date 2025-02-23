
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
    <div className="relative flex w-full max-w-[100vw-2rem]">
      {/* Timeline left section with icon */}
      <div className="relative">
        {/* Timeline connector line */}
        <div className="absolute left-4 sm:left-5 top-0 h-full w-px bg-gray-200" />
        
        <div 
          id={containerId}
          className="relative w-8 h-8 sm:w-10 sm:h-10"
        >
          <div className="absolute inset-[-4px] bg-white rounded-full" />
          <button 
            onClick={onToggleAnimation}
            className="absolute inset-0 rounded-full bg-brand-purple/10 flex items-center justify-center z-10 hover:bg-brand-purple/20 transition-colors"
          >
            {React.createElement(getIcon(exp.category), {
              className: "h-4 w-4 sm:h-5 sm:w-5 text-brand-purple"
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
      
      {/* Timeline content */}
      <div className="flex-1 min-w-0 pl-6 sm:pl-8">
        <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 hover:shadow-md transition-shadow">
          {/* Header section */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm sm:text-base font-semibold text-brand-dark line-clamp-2">{exp.title}</h3>
            
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-gray">
                <Icons.Building className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span className="truncate">{exp.company}</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-gray">
                <Icons.MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span className="truncate">{exp.location}</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-gray">
                <Icons.Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>{exp.period}</span>
              </div>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm text-neutral-gray my-3">{exp.description}</p>
          
          <div className="flex flex-wrap gap-1.5">
            {exp.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-2 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
