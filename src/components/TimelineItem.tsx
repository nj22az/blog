
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
    <div className="relative flex gap-4">
      {/* Timeline left section with icon */}
      <div className="relative flex-none">
        {/* Timeline connector line */}
        <div className="absolute left-5 top-0 h-full w-px bg-gray-200" />
        
        <div 
          id={containerId}
          className="relative w-10 h-10"
        >
          <div className="absolute inset-[-4px] bg-white rounded-full" />
          <button 
            onClick={onToggleAnimation}
            className="absolute inset-0 rounded-full bg-brand-purple/10 flex items-center justify-center z-10 hover:bg-brand-purple/20 transition-colors"
          >
            {React.createElement(getIcon(exp.category), {
              className: "h-5 w-5 text-brand-purple"
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
      <div className="flex-1 min-w-0">
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
          {/* Header section */}
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="text-base font-semibold text-brand-dark">{exp.title}</h3>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm text-neutral-gray">
                <Icons.Building className="h-4 w-4 shrink-0" />
                <span>{exp.company}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-neutral-gray">
                <Icons.MapPin className="h-4 w-4 shrink-0" />
                <span>{exp.location}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-neutral-gray">
                <Icons.Calendar className="h-4 w-4 shrink-0" />
                <span>{exp.period}</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-neutral-gray mb-4">{exp.description}</p>
          
          <div className="flex flex-wrap gap-1.5">
            {exp.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-2 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-medium"
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
