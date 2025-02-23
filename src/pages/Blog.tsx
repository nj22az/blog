
import { CalendarDays, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Blog = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-brand-dark mb-6">Blog</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="relative">
              <img
                src="/lovable-uploads/49913105-17f1-401c-9792-a1d073bf0dc8.png"
                alt="Jungle Office Meeting"
                className="rounded-lg w-full h-auto shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            
            <Alert variant="default" className="bg-brand-purple/10 border-brand-purple/20">
              <AlertCircle className="h-4 w-4 text-brand-purple" />
              <AlertTitle className="text-brand-purple">Stay Connected</AlertTitle>
              <AlertDescription className="text-neutral-gray">
                Follow us on social media to get notified when we launch!
              </AlertDescription>
            </Alert>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-brand-dark">
                Coming Soon: Your Gateway to Industrial Innovation
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                We're crafting a unique space where industrial automation meets maritime engineering. 
                Our blog will be your window into the fascinating world of calibration expertise, 
                technical insights, and industry best practices.
              </p>
            </div>

            <div className="space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-medium text-brand-dark">What to Expect:</h4>
              <ul className="space-y-3 text-neutral-gray">
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
                  <span>In-depth technical articles and case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
                  <span>Industry insights and trend analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
                  <span>Expert interviews and professional development tips</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
                  <span>Latest news in maritime engineering</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-2 text-sm text-neutral-gray">
              <CalendarDays className="h-4 w-4" />
              <span>Launching Q2 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
