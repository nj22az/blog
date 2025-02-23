import { Download, FileText, Table, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";

const downloadItems = [
  {
    title: "Professional CV Template",
    icon: FileText,
    description: "Clean and modern CV template in Word and PDF formats",
    fileSize: "1.2 MB",
  },
  {
    title: "Project Timeline Template",
    icon: Table,
    description: "Excel template for tracking project milestones and deadlines",
    fileSize: "856 KB",
  },
  {
    title: "Tech Presentation Template",
    icon: Presentation,
    description: "PowerPoint template for technical presentations",
    fileSize: "2.1 MB",
  },
];

const Downloads = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-brand-dark mb-6">Downloads</h2>
      <div className="space-y-4">
        {downloadItems.map((item) => (
          <div key={item.title} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="p-3 rounded-lg bg-brand-purple/10">
              <item.icon className="h-6 w-6 text-brand-purple" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-brand-dark">{item.title}</h3>
              <p className="text-sm text-neutral-gray mt-1">{item.description}</p>
              <p className="text-sm text-neutral-gray mt-2">{item.fileSize}</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Downloads;
