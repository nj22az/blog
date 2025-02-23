
import { Construction } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Downloads = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="max-w-3xl mx-auto text-center py-12">
        <div className="flex justify-center mb-6">
          <Construction className="h-16 w-16 text-brand-purple opacity-50" />
        </div>
        
        <h2 className="text-2xl font-semibold text-brand-dark mb-4">
          Downloads Coming Soon
        </h2>
        
        <Alert className="bg-brand-purple/5 border-brand-purple/10">
          <AlertDescription className="text-neutral-gray">
            We're currently preparing professional documents and templates for download. 
            Check back soon for CV templates, cover letters, and more resources.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default Downloads;
