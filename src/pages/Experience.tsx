
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { BriefcaseIcon, CalendarIcon, BuildingIcon, GraduationCap } from "lucide-react";

// This is sample data - you can replace it with your JSON later
const experiences = [
  {
    type: "work",
    title: "Tech Lead",
    company: "Company X",
    location: "Stockholm",
    period: "2020 - Present",
    description: "Leading development teams and architecting scalable solutions.",
    skills: ["Team Leadership", "System Architecture", "Agile", "Cloud Infrastructure"],
  },
  {
    type: "work",
    title: "Senior Developer",
    company: "Company Y",
    location: "Stockholm",
    period: "2018 - 2020",
    description: "Full-stack development and mentoring junior developers.",
    skills: ["React", "Node.js", "AWS", "MongoDB"],
  },
  {
    type: "education",
    title: "MSc in Computer Science",
    company: "University Z",
    location: "Stockholm",
    period: "2016 - 2018",
    description: "Specialized in Software Engineering and Distributed Systems.",
    skills: ["Algorithms", "Distributed Systems", "Machine Learning"],
  },
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
                      {exp.type === "work" ? (
                        <BriefcaseIcon className="h-5 w-5 sm:h-6 sm:w-6 text-brand-purple" />
                      ) : (
                        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-brand-purple" />
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-brand-dark">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-gray mt-1">
                          <BuildingIcon className="h-4 w-4 shrink-0" />
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
