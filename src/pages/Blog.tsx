
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Blog = () => {
  return <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-brand-dark mb-6">About The Office</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 md:sticky md:top-20">
            <div className="relative">
              <img src="/lovable-uploads/49913105-17f1-401c-9792-a1d073bf0dc8.png" alt="Jungle Office Meeting" className="rounded-lg w-full h-auto shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            
            <Alert variant="default" className="bg-brand-purple/10 border-brand-purple/20">
              <AlertCircle className="h-4 w-4 text-brand-purple" />
              <AlertTitle className="text-brand-purple">Our Mission</AlertTitle>
              <AlertDescription className="text-neutral-gray">
                Bridging industrial expertise with innovative solutions through dedicated service and technical excellence.
              </AlertDescription>
            </Alert>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-brand-dark">
                The Office of Nils Johansson
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                Welcome to The Office of Nils Johansson, a specialized consultancy bridging the gap between 
                marine engineering excellence and industrial automation innovation. Founded on years of hands-on 
                experience in both maritime operations and precision engineering, we offer unique insights and 
                solutions to complex technical challenges.
              </p>
            </div>

            <div className="space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-medium text-brand-dark">What We Do:</h4>
              <ul className="space-y-3 text-neutral-gray">
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
                  <span>Specialized calibration services for industrial and marine equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
                  <span>Industrial automation system design and implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
                  <span>Marine engineering consultancy and technical support</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
                  <span>Professional training and documentation services</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-neutral-gray leading-relaxed">
                Our approach combines Swedish engineering precision with international maritime expertise, 
                delivering reliable solutions for both onshore and offshore operations. Whether you need 
                specialized calibration services, automation solutions, or marine engineering expertise, 
                we're here to ensure your systems perform at their optimal capacity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default Blog;
