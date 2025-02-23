
import { Calendar, MapPin, Building } from "lucide-react";

const MainContent = () => {
  return (
    <div className="space-y-6">
      {/* Profile Overview */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start gap-6">
          <div className="w-32 h-32 rounded-full bg-brand-purple/20 flex items-center justify-center">
            <span className="text-4xl font-medium text-brand-purple">NJ</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-brand-dark">Nils Johansson</h2>
            <p className="text-neutral-gray mt-2">
              Senior Software Engineer passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex gap-4 mt-4">
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
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-brand-dark mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL", "MongoDB"].map(
            (skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* Recommendations Preview */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-brand-dark mb-4">Recent Recommendations</h3>
        <div className="space-y-4">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg bg-gray-50">
              <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center">
                <span className="text-sm font-medium text-brand-secondary">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
              <div>
                <h4 className="font-medium text-brand-dark">Jane Smith</h4>
                <p className="text-sm text-neutral-gray mt-1">
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
