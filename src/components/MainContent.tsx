
import { Calendar, MapPin, Building, Globe2, Languages, Linkedin } from "lucide-react";

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
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-primary" />
                  <span className="text-base text-muted-foreground">Field Service Engineer at Instron</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="text-base text-muted-foreground">
                    <p>Based in:</p>
                    <p>Örebro, Sweden •</p>
                    <p>Da Nang, Quang Nam, Vietnam</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Languages className="h-5 w-5 text-primary" />
                  <div className="text-base text-muted-foreground">
                    <p>Languages:</p>
                    <p>Swedish (Native) • English (Fluent)</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-primary" />
                  <span className="text-base text-muted-foreground">Connect with me:</span>
                </div>
                <a 
                  href="https://www.linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-base">LinkedIn Profile</span>
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Want to reach out? Feel free to connect with me via social media above!
                </p>
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
            As a Field Service Engineer at Instron, I bring together my passion for engineering and problem-solving 
            to deliver exceptional technical solutions. My journey began in marine engineering, where I developed 
            a strong foundation in systems maintenance and troubleshooting in challenging offshore environments.
          </p>
          <p className="leading-relaxed">
            What drives me is the opportunity to work with cutting-edge automation systems and precision equipment. 
            I specialize in calibration services and take pride in ensuring that every system I work with operates 
            at its optimal performance level. My experience spans both onshore and offshore operations, giving me 
            a unique perspective on implementing technical solutions in diverse environments.
          </p>
          <p className="leading-relaxed">
            Beyond technical expertise, I value building strong relationships with clients and team members. 
            I believe that effective communication and collaboration are key to successful project outcomes. 
            Whether it's conducting installations, performing calibrations, or troubleshooting complex systems, 
            I approach each task with dedication and attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
