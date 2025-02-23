
import { Calendar, MapPin, Building } from "lucide-react";

const MainContent = () => {
  return (
    <div className="space-y-6">
      {/* Profile Overview */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-brand-purple/20 flex items-center justify-center">
            <span className="text-3xl sm:text-4xl font-medium text-brand-purple">NJ</span>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-brand-dark">Nils Johansson</h2>
            <p className="text-sm sm:text-base text-neutral-gray mt-2">
              Senior Software Engineer passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 items-center sm:items-start">
              <div className="flex items-center gap-2 text-sm text-neutral-gray">
                <Building className="h-4 w-4" />
                <span>Tech Lead at Company X</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-gray">
                <MapPin className="h-4 w-4" />
                <span>Stockholm, Sweden</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-gray">
                <Calendar className="h-4 w-4" />
                <span>10+ years experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Overview */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-brand-dark mb-4">Skills</h3>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL", "MongoDB"].map(
            (skill) => (
              <span
                key={skill}
                className="px-2 sm:px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs sm:text-sm font-medium"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* Recommendations Preview */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-brand-dark mb-4">Recent Recommendations</h3>
        <div className="space-y-3 sm:space-y-4">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-gray-50">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center shrink-0">
                <span className="text-sm font-medium text-brand-secondary">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
              <div>
                <h4 className="font-medium text-brand-dark text-sm sm:text-base">Jane Smith</h4>
                <p className="text-xs sm:text-sm text-neutral-gray mt-1">
                  "Nils is an exceptional engineer with a keen eye for detail..."
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
