
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
    <div className="relative pl-6 md:pl-0 pr-4 md:pr-0">
      <div className="flex items-start gap-4 relative">
        {/* Timeline left section with icon */}
        <div className="relative shrink-0">
          {/* Timeline connector line */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-12 h-[calc(100%+2rem)] w-px bg-gray-200"
            style={{ height: isLast ? '0' : 'calc(100% + 2rem)' }}
          />
          
          <div 
            id={containerId}
            className="relative w-8 h-8 md:w-10 md:h-10 z-10"
          >
            <div className="absolute inset-[-4px] bg-white rounded-full" />
            <button 
              onClick={onToggleAnimation}
              className="absolute inset-0 rounded-full bg-brand-purple/10 flex items-center justify-center hover:bg-brand-purple/20 transition-colors"
            >
              {React.createElement(getIcon(exp.category), {
                className: "h-4 w-4 md:h-5 md:w-5 text-brand-purple"
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
        <div className="flex-1 min-w-0 pb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
            {/* Title and Period */}
            <div className="flex flex-col gap-1 mb-3">
              <h3 className="text-base font-semibold text-brand-dark">
                {exp.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-neutral-gray">
                <Icons.Calendar className="h-3.5 w-3.5 shrink-0" />
                <span>{exp.period}</span>
              </div>
            </div>
            
            {/* Company and Location */}
            <div className="flex flex-col gap-1.5 mb-3">
              <div className="flex items-center gap-1.5 text-xs text-neutral-gray">
                <Icons.Building className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{exp.company}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-gray">
                <Icons.MapPin className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{exp.location}</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xs md:text-sm text-neutral-gray mb-4">
              {exp.description}
            </p>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="inline-block px-2 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
