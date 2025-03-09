import React from 'react';
import { MapPin, Building, Languages, Linkedin, Github, Briefcase, Star } from "lucide-react";
import { Link } from "react-router-dom";
import profilePicture from "../assets/images/profile.png";

const Profile = () => {
  const professionalSummary = `I'm a Field Service Engineer at Instron, passionate about understanding how things work and dedicated to solving real-world challenges. My journey began in marine engineering, where working in tough offshore environments taught me resilience, meticulous maintenance, and thoughtful problem-solving. Over the years, I've grown to appreciate working with advanced automation systems and precision equipment—not just for the technical puzzles they offer, but also for the continuous learning and improvement they inspire.

I take pride in ensuring every system I handle operates reliably and efficiently, whether it's through installations, calibrations, or troubleshooting complex setups. Above all, I believe the key to any project's success lies in building respectful, open relationships with clients and colleagues. Clear communication and collaboration are at the heart of my approach, creating environments where challenges are met with collective insight and care.`;

  return (
    <div className="space-y-6">
      {/* Profile Overview */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-border">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-rotate-12">
            <img 
              src={profilePicture}
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Nils Johansson</h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
              {professionalSummary}
            </p>
            
            {/* Contact and Location Information */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-3">
                <Building className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-medium text-foreground">Position</h3>
                <p className="text-xs text-muted-foreground mt-1">Field Service Engineer at Instron</p>
              </div>

              <div className="flex flex-col items-center text-center p-3">
                <MapPin className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-medium text-foreground">Location</h3>
                <p className="text-xs text-muted-foreground mt-1">Örebro, Sweden</p>
                <p className="text-xs text-muted-foreground">Da Nang, Vietnam</p>
              </div>

              <div className="flex flex-col items-center text-center p-3">
                <Languages className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-medium text-foreground">Languages</h3>
                <p className="text-xs text-muted-foreground mt-1">Swedish (Native)</p>
                <p className="text-xs text-muted-foreground">English (Fluent)</p>
              </div>
            </div>
            
            {/* Skills and Experience Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link to="/experience" className="group flex flex-col items-center p-4 rounded-xl border border-gray-200 hover:border-brand-purple/50 hover:shadow-md transition-all">
                <div className="p-3 rounded-full bg-brand-purple/10 group-hover:scale-110 transition-transform">
                  <Briefcase className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="mt-3 font-medium text-brand-dark">Experience</h3>
                <p className="text-sm text-muted-foreground text-center">Professional Journey</p>
              </Link>

              <Link to="/skills" className="group flex flex-col items-center p-4 rounded-xl border border-gray-200 hover:border-brand-purple/50 hover:shadow-md transition-all">
                <div className="p-3 rounded-full bg-brand-purple/10 group-hover:scale-110 transition-transform">
                  <Star className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="mt-3 font-medium text-brand-dark">Skills</h3>
                <p className="text-sm text-muted-foreground text-center">Engineering & Automation</p>
              </Link>
            </div>

            <div className="col-span-full border-t border-border mt-2 pt-4">
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/nils-johansson-86744583/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-xs">LinkedIn</span>
                </a>
                <div className="h-4 w-px bg-border"></div>
                <a 
                  href="https://github.com/nj22az" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="text-xs">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Who Am I?</h3>
        <div className="space-y-4">
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              I'm a Field Service Engineer at Instron, passionate about understanding how things work and dedicated to solving real-world challenges. My journey began in marine engineering, where working in tough offshore environments taught me resilience, meticulous maintenance, and thoughtful problem-solving. Over the years, I've grown to appreciate working with advanced automation systems and precision equipment—not just for the technical puzzles they offer, but also for the continuous learning and improvement they inspire.
            </p>
            <p className="leading-relaxed">
              I take pride in ensuring every system I handle operates reliably and efficiently, whether it's through installations, calibrations, or troubleshooting complex setups. Above all, I believe the key to any project's success lies in building respectful, open relationships with clients and colleagues. Clear communication and collaboration are at the heart of my approach, creating environments where challenges are met with collective insight and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 