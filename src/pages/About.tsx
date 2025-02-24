import aboutImage from "../assets/images/about.png";
import logo from "../assets/images/logo.png";

const About = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-border">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Title Section */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mb-6 rounded-full overflow-hidden border-4 border-[#1d3557]/10">
              <img 
                src={logo} 
                alt="The Office of Nils Johansson Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-semibold text-[#1d3557] tracking-tight">
                The Office of Nils Johansson
              </h1>
              <p className="text-lg text-muted-foreground font-light">
                Sweden & Vietnam
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={aboutImage} 
                alt="The Office Environment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Description */}
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Welcome to The Office of Nils Johansson, a unique workspace that bridges Sweden and Vietnam. 
                This isn't just a physical location—it's a hub of engineering innovation and cross-cultural collaboration. 
                Our office environment reflects our commitment to combining technical expertise with a welcoming, 
                collaborative atmosphere.
              </p>
              
              <p className="text-lg leading-relaxed">
                The space is designed to facilitate both focused technical work and open communication. 
                Whether it's conducting detailed calibrations, analyzing engineering data, or hosting virtual 
                meetings with clients across different time zones, our office is equipped to handle diverse 
                engineering challenges while maintaining a comfortable, productive environment.
              </p>

              <p className="text-lg leading-relaxed">
                We believe that a well-designed workspace contributes significantly to the quality of our work. 
                That's why we've created an environment that balances professional capabilities with personal comfort, 
                enabling us to deliver the best possible service to our clients while enjoying what we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 