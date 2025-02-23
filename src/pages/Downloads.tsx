
import { Download, FileText, Table, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const downloadItems = [
  {
    title: "Professional CV (2024)",
    icon: FileText,
    description: "Comprehensive curriculum vitae highlighting expertise in Field Service Engineering, Marine Engineering, and Industrial Automation.",
    formats: [
      { name: "PDF", size: "285 KB", url: "/downloads/Nils_Johansson_CV_2024.pdf" },
      { name: "Word", size: "422 KB", url: "/downloads/Nils_Johansson_CV_2024.docx" }
    ]
  },
  {
    title: "Cover Letter Template",
    icon: Book,
    description: "Professional cover letter showcasing technical expertise and commitment to engineering excellence.",
    formats: [
      { name: "PDF", size: "195 KB", url: "/downloads/Nils_Johansson_Cover_Letter_2024.pdf" },
      { name: "Word", size: "325 KB", url: "/downloads/Nils_Johansson_Cover_Letter_2024.docx" }
    ]
  }
];

const Downloads = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-brand-dark mb-4">Professional Documents</h2>
        
        <Alert className="mb-6 bg-brand-purple/5 border-brand-purple/10">
          <AlertDescription className="text-neutral-gray">
            These documents are carefully crafted to serve both as my personal professional presentations and as templates for others seeking guidance in creating their own CV and cover letter.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {downloadItems.map((item) => (
            <div key={item.title} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-brand-purple/10">
                    <item.icon className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-brand-dark text-lg">{item.title}</h3>
                    <p className="text-sm text-neutral-gray mt-1">{item.description}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  {item.formats.map((format) => (
                    <Button
                      key={format.name}
                      variant="outline"
                      className="flex items-center gap-2 hover:bg-brand-purple/5 hover:text-brand-purple"
                      onClick={() => window.open(format.url, '_blank')}
                    >
                      <Download className="h-4 w-4" />
                      <span>{format.name}</span>
                      <span className="text-xs text-neutral-gray">({format.size})</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-lg font-medium text-brand-dark mb-4">Document Features</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
              <span className="text-sm text-neutral-gray">Clean, professional layout with consistent formatting across both PDF and Word formats</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
              <span className="text-sm text-neutral-gray">ATS-friendly design to ensure compatibility with recruitment systems</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
              <span className="text-sm text-neutral-gray">Carefully structured sections highlighting key competencies and achievements</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="min-w-2 h-2 w-2 rounded-full bg-brand-purple mt-2"></div>
              <span className="text-sm text-neutral-gray">Easily customizable templates for personal adaptation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
