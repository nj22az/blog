import aboutImage from "../assets/images/about.png";

const About = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-border">
        <h2 className="text-2xl font-semibold text-foreground mb-6">About The Office</h2>
        
        <div className="space-y-6">
          {/* Featured Image */}
          <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
            <img 
              src={aboutImage} 
              alt="The Office Environment" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Welcome to The Office of Nils Johansson, a unique workspace that bridges Sweden and Vietnam. 
              This isn't just a physical location—it's a hub of engineering innovation and cross-cultural collaboration. 
              Our office environment reflects our commitment to combining technical expertise with a welcoming, 
              collaborative atmosphere.
            </p>
            
            <p className="leading-relaxed">
              The space is designed to facilitate both focused technical work and open communication. 
              Whether it's conducting detailed calibrations, analyzing engineering data, or hosting virtual 
              meetings with clients across different time zones, our office is equipped to handle diverse 
              engineering challenges while maintaining a comfortable, productive environment.
            </p>

            <p className="leading-relaxed">
              We believe that a well-designed workspace contributes significantly to the quality of our work. 
              That's why we've created an environment that balances professional capabilities with personal comfort, 
              enabling us to deliver the best possible service to our clients while enjoying what we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 