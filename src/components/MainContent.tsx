
import { MapPin, Building, Languages, Linkedin, Github } from "lucide-react";

const MainContent = () => {
  return (
    <div className="space-y-6">
      {/* Profile Overview */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-border">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
            <img 
              src="/lovable-uploads/d0b6e8a0-fbab-45b8-8c90-4f8c7bba9262.png" 
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Nils Johansson</h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
              Field Service Engineer at Instron with extensive expertise in marine and automation engineering. 
              Specializing in calibration, installation, and automation systems for both onshore and offshore operations. 
              Proven track record in commissioning, technical operations, and delivering hands-on engineering solutions 
              that ensure optimal system performance.
            </p>
            
            {/* Contact and Location Information */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
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
      </div>

      {/* About Me Section */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Who Am I?</h3>
        <div className="space-y-4 text-muted-foreground">
          <p className="leading-relaxed">
            I am a Field Service Engineer at Instron, driven by a genuine curiosity for how things work and a dedication to solving practical challenges. My career began in marine engineering, where working in demanding offshore environments taught me the value of perseverance, careful maintenance, and thoughtful problem-solving. Over the years, I have come to appreciate the opportunity to work with advanced automation systems and precision equipment—not just for the technical challenges they present, but also for the chance to continuously learn and improve.
          </p>
          <p className="leading-relaxed">
            I take pride in ensuring that every system operates reliably and efficiently, whether I am conducting an installation, performing calibrations, or troubleshooting complex setups. More importantly, I believe that the success of any project lies in building respectful, open relationships with clients and colleagues alike. By embracing clear communication and collaboration, I strive to create work environments where every challenge is met with collective insight and care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
